import { useCallback, useEffect, useRef } from 'react';
import { PopoverContextProps, PopoverProps } from './type';

type PopoverEventParams = Pick<PopoverContextProps, 'triggerType' | 'triggerRef' | 'contentRef' | 'container'> & {
  disabled: boolean;
  toggle: () => void;
  close: () => void;
};

export const useClick = ({
  triggerType,
  triggerRef,
  contentRef,
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

      if (triggerIsActive) {
        toggle();
      } else if (!contentIsActive) {
        close();
      }
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [close, contentRef, disabled, toggle, triggerRef, triggerType]);
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

  const closeSlowly = useCallback(() => {
    clearTimeout(timer.current);
    isHovered.current = false;
    timer.current = setTimeout(() => {
      if (isHovered.current) return;
      isHovered.current = false;
      close();
    }, 300);
  }, [close]);

  useEffect(() => {
    if (disabled || triggerType === 'click') return;
    const $trigger = triggerRef.current;
    if (!$trigger) return;

    const openConditionally = () => {
      if (isHovered.current) return;
      isHovered.current = true;
      toggle();
    };

    $trigger.addEventListener('mouseenter', openConditionally);
    $trigger.addEventListener('mouseleave', closeSlowly);

    return () => {
      $trigger.removeEventListener('mouseenter', openConditionally);
      $trigger.removeEventListener('mouseleave', closeSlowly);
      clearTimeout(timer.current);
    };
  }, [closeSlowly, disabled, toggle, triggerRef, triggerType]);

  useEffect(() => {
    if (disabled || triggerType === 'click') return;
    if (!container) return;

    const stayOpen = () => (isHovered.current = true);

    container.addEventListener('mouseenter', stayOpen);
    container.addEventListener('mouseleave', closeSlowly);

    return () => {
      container.removeEventListener('mouseenter', stayOpen);
      container.removeEventListener('mouseleave', closeSlowly);
    };
  }, [closeSlowly, container, disabled, triggerType]);
};

export const useKeydown = ({
  triggerRef,
  close,
  toggle,
  disabled,
}: Pick<PopoverEventParams, 'triggerRef' | 'toggle' | 'close' | 'disabled'>) => {
  useEffect(() => {
    if (disabled) return;

    function handleKeydown(e: KeyboardEvent) {
      const $focused = document.activeElement as HTMLElement;
      const $trigger = triggerRef?.current;
      const triggerIsFocused = $trigger && $trigger.contains($focused);

      if (e.code == 'Enter' || e.code === 'Space') {
        if (triggerIsFocused) {
          toggle();
          e.preventDefault();
        }
      } else if (e.code === 'Escape') {
        close();
      }
    }

    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });
};

type PopoverPositionParams = Pick<PopoverContextProps, 'triggerRef' | 'contentRef' | 'container'> &
  Required<Pick<PopoverProps, 'position' | 'offset' | 'offsetDirection'>> & {
    setOpenAnimation: () => void;
  };
export const useCalculatePosition = ({
  triggerRef,
  contentRef,
  offset,
  offsetDirection,
  position,
  container,
  setOpenAnimation,
}: PopoverPositionParams) => {
  const calculatePosition = useCallback(() => {
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

    if (offsetDirection === 'left') popoverPosition.position.x -= offset;
    if (offsetDirection === 'right') popoverPosition.position.x += offset;
    if (offsetDirection === 'top') popoverPosition.position.y -= offset;
    if (offsetDirection === 'bottom') popoverPosition.position.y += offset;

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

    if (contentBoundingRect.y < 0) {
      $content.style.top = `${offset}px`;
      $content.style.transform = `translate(0, 0)`;
    }

    const finalStyles = $content.getBoundingClientRect();
    // style.transform을 없애기 위한 재할당
    $content.style.top = `${finalStyles.top + windowScrollY}px`;
    $content.style.left = `${finalStyles.left + windowScrollX}px`;
    $content.style.transform = 'unset';
    // transform origin + scale 의 자연스러운 애니메이션을 위해 transform을 unset한 것임
    $content.style.transformOrigin = `${position.transform.vertical} ${position.transform.horizontal}`;

    setOpenAnimation();
  }, [
    contentRef,
    offset,
    offsetDirection,
    position.anchor.horizontal,
    position.anchor.vertical,
    position.transform.horizontal,
    position.transform.vertical,
    setOpenAnimation,
    triggerRef,
  ]);

  useEffect(() => {
    if (container) {
      calculatePosition();
    }
  }, [calculatePosition, container]);

  useEffect(() => {
    window.addEventListener('resize', calculatePosition);
    return () => {
      window.removeEventListener('resize', calculatePosition);
    };
  }, [calculatePosition]);
};
