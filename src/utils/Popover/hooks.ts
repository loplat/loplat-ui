import { useCallback, useEffect } from 'react';
import { PopoverContextType, PopoverTypes } from './type';

type PopoverEventParams = Pick<
  PopoverContextType,
  'triggerType' | 'triggerRef' | 'contentRef' | 'isOpen' | 'disabled'
> & {
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
}: PopoverEventParams) => {
  useEffect(() => {
    if (triggerType === 'hover') return;
    if (disabled) return;

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
  contentRef,
  isOpen,
  close,
  toggle,
  disabled,
}: PopoverEventParams) => {
  useEffect(() => {
    if (disabled) return;
    if (triggerType === 'click') return;
    if (triggerRef.current) {
      triggerRef.current.addEventListener('mouseenter', toggle);
      triggerRef.current.addEventListener('mouseleave', close);
    }
  });
};

export const useKeyDown = ({ triggerRef, contentRef, close, toggle, disabled }: Omit<PopoverEventParams, 'isOpen'>) => {
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

type PopoverPositionParams = Required<
  Pick<PopoverContextType, 'container' | 'triggerRef' | 'contentRef' | 'position'>
> &
  Required<Pick<PopoverTypes, 'offset'>>;
export const usePopoverPosition = ({ container, triggerRef, contentRef, position, offset }: PopoverPositionParams) => {
  const changePopoverPosition = useCallback(() => {
    const $trigger = triggerRef?.current;
    const $content = contentRef?.current;
    if (!$content || !$trigger) return;

    $content.style.transform = 'scale(0.75)';
    $content.style.opacity = '0';

    const windowScrollY = window.scrollY;
    const windowScrollX = window.scrollX;
    const windowScrollWidth = document.body.scrollWidth;
    const triggerBoundingRect = $trigger.getBoundingClientRect();

    $content.style.minWidth = `${triggerBoundingRect.width}px`;

    const yPosition =
      position.anchor.vertical === 'top'
        ? triggerBoundingRect.top
        : position.anchor.vertical === 'bottom'
        ? triggerBoundingRect.bottom
        : (triggerBoundingRect.bottom + triggerBoundingRect.top) / 2;

    const xPosition =
      position.anchor.horizontal === 'left'
        ? triggerBoundingRect.left
        : position.anchor.horizontal === 'right'
        ? triggerBoundingRect.right
        : (triggerBoundingRect.left + triggerBoundingRect.right) / 2;

    const yTransform =
      position.portal.vertical === 'top' ? 0 : position.portal.vertical === 'center' ? '-50%' : '-100%';
    const xTransform =
      position.portal.horizontal === 'left' ? 0 : position.portal.horizontal === 'center' ? '-50%' : '-100%';

    $content.style.top = `${windowScrollY + yPosition}px`;
    $content.style.left = `${windowScrollX + xPosition}px`;
    $content.style.transform = `translate(${xTransform}, ${yTransform})`;

    const contentBoundingRect = $content.getBoundingClientRect();
    // window 오른쪽으로 벗어났을 경우
    if (windowScrollX + contentBoundingRect.right > windowScrollWidth) {
      $content.style.left = `${triggerBoundingRect.right - $content.offsetWidth}px`;
    }

    $content.style.opacity = '1';
  }, [
    triggerRef,
    contentRef,
    position.anchor.vertical,
    position.anchor.horizontal,
    position.portal.vertical,
    position.portal.horizontal,
  ]);

  useEffect(() => {
    if (container) {
      changePopoverPosition();
    }
  }, [changePopoverPosition, container]);

  useEffect(() => {
    window.addEventListener('resize', changePopoverPosition);
    return () => {
      window.removeEventListener('resize', changePopoverPosition);
      close();
    };
  }, [changePopoverPosition]);
};
