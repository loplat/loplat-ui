import { createContext, useState, useRef, useContext, useMemo } from 'react';
import { PopoverContentProps, PopoverContextProps, PopoverTriggerProp, PopoverProps } from './type';
import { generateUniqueId } from '../../functions/uniqueId';
import { Portal } from '..';
import { useCalculatePosition, useClick, useHover } from './hooks';
import { ContentWrapper } from './styles';
import useAnimation from '../../functions/useAnimation';

type PopoverStatus = 'opening' | 'closing' | 'opened' | 'closed';
const DEFAULT_POSITION: PopoverProps['position'] = {
  anchor: { vertical: 'top', horizontal: 'right' },
  transform: { vertical: 'top', horizontal: 'left' },
};
const KEYFRAMES: Record<'SCALE' | 'SCALE_Y', NonNullable<PopoverProps['keyframes']>> = {
  SCALE: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 },
  ],
  SCALE_Y: [
    { opacity: 0, transform: 'scaleY(0)' },
    { opacity: 1, transform: 'scaleY(1)' },
  ],
};

const PopoverContext = createContext<PopoverContextProps | undefined>(undefined);
export const Popover = ({
  children,
  keyframes = KEYFRAMES.SCALE,
  disabled = false,
  position = DEFAULT_POSITION,
  triggerType = 'click',
  offset = 0,
  enterDelay = 0,
  outDelay = 0,
  duration = 300,
  easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
  offsetDirection = 'right',
}: PopoverProps) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);
  const status = useRef<PopoverStatus>('closed');

  // portal
  const [container, setContainer] = useState<PopoverContextProps['container']>(null);
  const uniqueId = useMemo(() => generateUniqueId(), []);
  const isOpen = !!container && (status.current === 'opened' || status.current === 'opening');

  const createPopover = () => {
    const newContainer = document.createElement('div');
    newContainer.id = uniqueId;
    document.body.appendChild(newContainer);
    setContainer(newContainer);
  };
  const removePopover = () => {
    const targetContainer = document.getElementById(uniqueId);
    targetContainer?.remove();
    container?.remove();
    setContainer(null);
  };

  const open = () => {
    status.current = 'opening';
    if (!container) {
      setTimeout(() => createPopover(), enterDelay);
    }
  };
  const close = () => {
    status.current = 'closing';
    setTimeout(() => setAnimation(false), outDelay);
  };

  const toggle = () => {
    if (disabled) return;
    if (status.current === 'closed' || status.current === 'closing') {
      open();
    } else if (status.current === 'opened' || status.current === 'opening') {
      close();
    }
  };

  const setAnimation = (isOpening: boolean) => {
    const $content = contentRef.current;
    if (!$content) return;
    const targetKey = isOpening ? keyframes : [...keyframes].reverse();

    if (!animation.current) {
      animation.current = $content.animate(targetKey, { duration, easing });
    } else {
      const currentTiming = animation.current.currentTime as number;
      animation.current.cancel(); // NOTE: 기존의 animation의 onFinish등의 side effect를 완전히 제거하기 위함
      animation.current = $content.animate(targetKey, { duration, easing });
      animation.current.currentTime = duration - currentTiming;
    }
    animation.current.onfinish = onAnimationFinished;
  };

  const onAnimationFinished = () => {
    const isOpening = status.current === 'opening';
    if (isOpening) {
      if (contentRef.current) contentRef.current.style.opacity = '1';
      if (triggerType === 'click') document.body.style.overflow = 'hidden';
    } else {
      removePopover();
      if (triggerType === 'click') document.body.style.overflow = 'initial';
    }
    // clear
    animation.current = null;
    status.current = isOpening ? 'opened' : 'closed';
  };

  const setOpenAnimation = () => {
    if (status.current === 'opened') return;
    setAnimation(true);
  };

  useAnimation();
  useClick({ triggerType, triggerRef, contentRef, close, toggle, disabled });
  useHover({ triggerType, triggerRef, close, toggle, disabled, container });
  useCalculatePosition({
    container,
    triggerRef,
    contentRef,
    position,
    offset,
    offsetDirection,
    setOpenAnimation,
  });

  return (
    <PopoverContext.Provider value={{ container, triggerRef, contentRef, isOpen }}>{children}</PopoverContext.Provider>
  );
};

export const usePopover = (): PopoverContextProps => {
  const context = useContext(PopoverContext);
  if (!context) throw new Error('The sub-components of the Popover component must be used within a Popover component.');

  return context;
};

Popover.Trigger = function PopoverTrigger({ children }: PopoverTriggerProp) {
  const { isOpen, triggerRef } = usePopover();
  return (
    <div tabIndex={0} ref={triggerRef} style={{ display: 'flex', width: 'fit-content' }}>
      {children(isOpen)}
    </div>
  );
};

Popover.Content = function PopoverContent({ children }: PopoverContentProps) {
  const { container, contentRef } = usePopover();
  return (
    <Portal container={container}>
      <ContentWrapper ref={contentRef}>{children}</ContentWrapper>
    </Portal>
  );
};

Popover.KEYFRAMES = KEYFRAMES;
