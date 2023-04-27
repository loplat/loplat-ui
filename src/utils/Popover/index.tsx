import { createContext, useState, useRef, useContext, useMemo } from 'react';
import { PopoverContentType, PopoverContextType, PopoverTriggerType, PopoverTypes } from './type';
import { generateUniqueId } from '../../functions/uniqueId';
import { Portal } from '..';
import { useClick, useHover, useKeyDown } from './hooks';
import { ContentWrapper } from './styles';
import useAnimation from '../../functions/useAnimation';

export const DEFAULT_POSITION: PopoverTypes['position'] = {
  anchor: { vertical: 'top', horizontal: 'right' },
  transform: { vertical: 'top', horizontal: 'left' },
};
const PopoverContext = createContext<PopoverContextType | undefined>(undefined);
export const Popover = ({
  children,
  disabled,
  position = DEFAULT_POSITION,
  triggerType = 'click',
  offset = 0,
  duration = 200,
}: PopoverTypes) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);

  // portal
  const [container, setContainer] = useState<PopoverContextType['container']>(null);
  const uniqueId = useMemo(() => generateUniqueId(), []);
  const isOpen = container !== null;

  const calculatePosition = () => {
    const $trigger = triggerRef?.current;
    const $content = contentRef?.current;
    if (!$content || !$trigger) return;

    const windowScrollY = window.scrollY;
    const windowScrollX = window.scrollX;
    const windowScrollWidth = document.body.scrollWidth;
    const windowClientWidth = document.body.clientWidth;
    const triggerBoundingRect = $trigger.getBoundingClientRect();

    const popoverPosition = {
      position: {
        x:
          position.anchor.horizontal === 'left'
            ? triggerBoundingRect.left
            : position.anchor.horizontal === 'right'
            ? triggerBoundingRect.right
            : (triggerBoundingRect.left + triggerBoundingRect.right) / 2,
        y:
          position.anchor.vertical === 'top'
            ? triggerBoundingRect.top
            : position.anchor.vertical === 'bottom'
            ? triggerBoundingRect.bottom
            : (triggerBoundingRect.bottom + triggerBoundingRect.top) / 2,
      },
      transform: {
        x: position.transform.horizontal === 'left' ? 0 : position.transform.horizontal === 'center' ? '-50%' : '-100%',
        y: position.transform.vertical === 'top' ? 0 : position.transform.vertical === 'center' ? '-50%' : '-100%',
      },
    };

    $content.style.top = `${windowScrollY + popoverPosition.position.y}px`;
    $content.style.left = `${windowScrollX + popoverPosition.position.x}px`;
    $content.style.transform = `translate(${popoverPosition.transform.x}, ${popoverPosition.transform.y})`;

    const contentBoundingRect = contentRef.current?.getBoundingClientRect();
    if (contentBoundingRect.width >= windowClientWidth) {
      // popper의 너비가 viewport 너비보다 클 경우
      $content.style.width = '100%';
      $content.style.left = `${windowScrollX}px`;
      $content.style.transform = `translate(0, ${popoverPosition.transform.y})`;
    } else if (windowScrollX + contentBoundingRect.left < 0) {
      // window 왼쪽으로 벗어났을 경우
      $content.style.left = `${windowScrollX + offset}px`;
      $content.style.transform = `translate(0, ${popoverPosition.transform.y})`;
    } else if (windowScrollX + contentBoundingRect.right > windowScrollWidth) {
      // window 오른쪽으로 벗어났을 경우
      $content.style.left = `${windowScrollWidth - (contentBoundingRect.width + offset)}px`;
      $content.style.transform = `translate(0, ${popoverPosition.transform.y})`;
    }

    // style.transform을 없애기 위한 재할당
    const finalStyles = $content.getBoundingClientRect();
    $content.style.top = `${finalStyles.top}px`;
    $content.style.left = `${finalStyles.left}px`;
    $content.style.transform = 'unset';
    // transform origin + scale 의 자연스러운 애니메이션을 위해 transform을 unset한 것임
    $content.style.transformOrigin = `${position.transform.vertical} ${position.transform.horizontal}`;
  };
  const setAnimation = () => {
    const $popover = contentRef.current;
    if (!$popover) return; // 없을경우 애니메이션 동작 안함
    animation.current = $popover.animate(
      [
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
      ],
      {
        duration,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    );
    animation.current.onfinish = () => {
      $popover.style.opacity = '1';
      animation.current = null;
    };
  };

  const createPopover = () => {
    const newContainer = document.createElement('div');
    newContainer.id = uniqueId;
    document.body.appendChild(newContainer);
    setContainer(newContainer);
  };
  const removePopover = () => {
    const targetContainer = document.getElementById(uniqueId);
    targetContainer?.remove();
    setContainer(null);
    window.removeEventListener('resize', calculatePosition);
  };

  const open = () => {
    createPopover();
    calculatePosition();
    setAnimation();
    window.addEventListener('resize', calculatePosition);
  };
  const close = () => {
    const $popover = contentRef.current;
    if (!$popover) removePopover();
    else {
      animation.current = $popover.animate(
        [
          { opacity: 1, scale: 1 },
          { opacity: 0, scale: 0.8 },
        ],
        {
          duration,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
      );
      animation.current.onfinish = () => {
        removePopover();
        animation.current = null;
      };
    }
  };
  const toggle = () => {
    isOpen ? close() : open();
  };

  useAnimation();
  useClick({ triggerType, triggerRef, contentRef, isOpen, close, toggle, disabled });
  useHover({ triggerType, triggerRef, close, toggle, disabled, container });
  useKeyDown({ triggerRef, contentRef, close, toggle, disabled });

  return (
    <PopoverContext.Provider value={{ container, triggerRef, contentRef, isOpen }}>{children}</PopoverContext.Provider>
  );
};

export const usePopover = (): PopoverContextType => {
  const context = useContext(PopoverContext);
  if (!context) throw new Error('The sub-components of the Popover component must be used within a Popover component.');

  return context;
};

Popover.Trigger = function PopoverTrigger({ children }: PopoverTriggerType) {
  const { isOpen, triggerRef } = usePopover();
  return (
    <div tabIndex={0} ref={triggerRef} style={{ display: 'flex', width: 'fit-content' }}>
      {children(isOpen)}
    </div>
  );
};

Popover.Content = function PopoverContent({ children }: PopoverContentType) {
  const { container, contentRef } = usePopover();
  return (
    <Portal container={container}>
      <ContentWrapper ref={contentRef}>{children}</ContentWrapper>
    </Portal>
  );
};

// optional 시간남을 때 작성하기
Popover.Arrow = function PopoverArrow() {
  return <div>Arrow</div>;
};
