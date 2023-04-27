import { createContext, useState, useRef, useContext, useMemo } from 'react';
import { PopoverContentType, PopoverContextType, PopoverTriggerType, PopoverTypes } from './type';
import { generateUniqueId } from '../../functions/uniqueId';
import { Portal } from '..';
import { useClick, useHover, useKeyDown, usePopoverPosition } from './hooks';
import { ContentWrapper } from './styles';
import useAnimation from '../../functions/useAnimation';

export const DEFAULT_POSITION: PopoverTypes['position'] = {
  anchor: { vertical: 'top', horizontal: 'right' },
  portal: { vertical: 'top', horizontal: 'left' },
};
const PopoverContext = createContext<PopoverContextType | undefined>(undefined);
export const Popover = ({
  children,
  disabled,
  position = DEFAULT_POSITION,
  triggerType = 'click',
  offset = 0,
}: PopoverTypes) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);

  // portal
  const [container, setContainer] = useState<PopoverContextType['container']>(null);
  const uniqueId = useMemo(() => generateUniqueId(), []);
  const isOpen = container !== null;

  const open = () => {
    const newContainer = document.createElement('div');
    newContainer.id = uniqueId;
    document.body.appendChild(newContainer);
    setContainer(newContainer);

    const $popover = contentRef.current;
    if (!$popover) return; // 없을경우 애니메이션 동작 안함
    animation.current = $popover.animate(
      [
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1 },
      ],
      {
        duration: 200,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    );
    animation.current.onfinish = () => {
      $popover.style.opacity = '1';
      animation.current = null;
    };
  };
  const removePopover = () => {
    const targetContainer = document.getElementById(uniqueId);
    targetContainer?.remove();
    setContainer(null);
  };
  const close = () => {
    const $popover = contentRef.current;
    if (!$popover) removePopover();
    else {
      animation.current = $popover.animate(
        [
          { opacity: 1, scale: 1 },
          { opacity: 0, scale: 0.7 },
        ],
        {
          duration: 200,
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
  usePopoverPosition({ container, triggerRef, contentRef, position, offset });

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
