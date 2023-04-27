import { useCallback, useEffect, useRef } from 'react';
import { PopoverContextType } from './type';

type PopoverEventParams = Pick<
  PopoverContextType,
  'triggerType' | 'triggerRef' | 'contentRef' | 'isOpen' | 'container'
> & {
  disabled: boolean;
  toggle: () => void;
  close: () => void;
};

export const useClick = ({
  triggerType,
  triggerRef,
  contentRef,
  isOpen,
  close,
  toggle,
  disabled,
}: Omit<PopoverEventParams, 'container'>) => {
  useEffect(() => {
    if (disabled || triggerType === 'hover') return;

    function handleClick(e: MouseEvent) {
      const $active = e.target as HTMLElement;
      const $trigger = triggerRef?.current;
      const $content = contentRef?.current;

      const triggerIsActive = $trigger && $trigger.contains($active);
      const contentIsActive = $content && $content.contains($active);
      const isActiveElemInputControl = $active.tagName === 'INPUT';

      if (isActiveElemInputControl && isOpen) {
        return;
      } else if (!triggerIsActive && !contentIsActive) {
        close();
      } else if (triggerIsActive) {
        toggle();
      }
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export const useHover = ({
  triggerType,
  triggerRef,
  container,
  toggle,
  close,
  disabled,
}: Omit<PopoverEventParams, 'isOpen' | 'contentRef'>) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const isHovered = useRef(false);

  const closeSlow = useCallback(() => {
    clearTimeout(timer.current);
    isHovered.current = false;
    timer.current = setTimeout(() => {
      if (isHovered.current) return;
      isHovered.current = false;
      close();
    }, 500);
  }, [close]);

  useEffect(() => {
    if (disabled || triggerType === 'click') return;
    if (!triggerRef.current) return;

    function toggleConditionally() {
      if (isHovered.current) return;
      isHovered.current = true;
      toggle();
    }

    triggerRef.current.addEventListener('mouseenter', toggleConditionally);
    triggerRef.current.addEventListener('mouseleave', closeSlow);
    () => {
      clearTimeout(timer.current);
      triggerRef.current?.removeEventListener('mouseenter', toggleConditionally);
      triggerRef.current?.removeEventListener('mouseleave', closeSlow);
    };
  });

  useEffect(() => {
    if (disabled || triggerType === 'click') return;
    if (!container) return;

    const stayOpen = () => (isHovered.current = true);

    container.addEventListener('mouseenter', stayOpen);
    container.addEventListener('mouseleave', closeSlow);
    return () => {
      container.removeEventListener('mouseenter', stayOpen);
      container.removeEventListener('mouseleave', closeSlow);
    };
  }, [closeSlow, container, disabled, triggerType]);
};

export const useKeyDown = ({
  triggerRef,
  contentRef,
  close,
  toggle,
  disabled,
}: Omit<PopoverEventParams, 'isOpen' | 'container'>) => {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (disabled) return;

      const $active = e.target as HTMLElement;
      const $trigger = triggerRef?.current;
      const $content = contentRef?.current;

      const triggerIsActive = $trigger && $trigger.contains($active);
      const contentIsActive = $content && $content.contains($active);
      const isActiveElemInputControl = $active.tagName === 'INPUT';

      if (!triggerIsActive && !contentIsActive) return;

      if (e.code === 'Enter' || e.code === 'Space') {
        if (isActiveElemInputControl) return;
        if (triggerIsActive) {
          toggle();
          e.preventDefault();
        }
      } else if (e.code === 'Escape' || e.code === 'Tab') {
        $trigger?.focus();
        close();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
};
