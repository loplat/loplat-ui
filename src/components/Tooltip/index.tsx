'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { spacing, tooltipZIndex } from '../../core';
import { Portal } from '../../utils';
import { TooltipProps } from './types';
import { Popper, Wrapper } from './styles';
import useAnimation from '../../functions/useAnimation';

export const Tooltip = ({
  children,
  title,
  placement = 'top',
  enterDelay = 0,
  zIndex = tooltipZIndex,
  disabled = false,
  fullWidth = false,
  ...props
}: TooltipProps): React.ReactElement => {
  const [container, setContainer] = useState<Element | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);
  const tooltipDelayTimer = useRef<NodeJS.Timer | null>(null);

  useAnimation();

  const renderTooltip = () => {
    if (disabled) return;

    if (!container) {
      createPopper();
      tooltipDelayTimer.current = setTimeout(() => {
        calculatePosition();
        setAnimationOpen();
      }, enterDelay);
    } else {
      if (animation.current) {
        animation.current.cancel();
        setAnimationOpen();
        animation.current.pause();
        animation.current.currentTime = 300;
      } else {
        setAnimationOpen();
      }
    }
  };

  const setAnimationOpen = () => {
    const popperElement = popperRef.current;
    if (!popperElement) return;

    animation.current = popperElement.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      easing: 'cubic-bezier(0.31, -0.06, 0.68, 1)',
    });
    animation.current.onfinish = () => {
      popperElement.style.opacity = '1';
      animation.current = null;
      clearTooltipDelay();
    };
  };

  const calculatePosition = () => {
    const windowScrollY = window.scrollY;
    const windowScrollX = window.scrollX;
    const windowScrollWidth = document.body.scrollWidth;
    const windowClientWidth = document.body.clientWidth;

    const wrapperBoundingRect = wrapperRef.current!.getBoundingClientRect(); // eslint-disable-line @typescript-eslint/no-non-null-assertion
    const wrapperTop = windowScrollY + wrapperBoundingRect.top;
    const wrapperBottom = windowScrollY + wrapperBoundingRect.bottom;
    const wrapperHorizontalCenter = windowScrollX + wrapperBoundingRect.left + wrapperBoundingRect.width / 2;

    const popperElement = popperRef.current;
    const gap = spacing(2);
    if (popperElement) {
      // 기본 위치
      if (placement === 'top') {
        popperElement.style.top = `${wrapperTop - gap}px`;
        popperElement.style.left = `${wrapperHorizontalCenter}px`;
        popperElement.style.transform = 'translate(-50%, -100%)';
      } else if (placement === 'bottom') {
        popperElement.style.top = `${wrapperBottom + gap}px`;
        popperElement.style.left = `${wrapperHorizontalCenter}px`;
        popperElement.style.transform = 'translate(-50%, 0)';
      } else if (placement === 'right') {
        popperElement.style.top = `${(wrapperBoundingRect.bottom + wrapperBoundingRect.top) / 2}px`;
        popperElement.style.left = `${windowScrollX + wrapperBoundingRect.right + gap}px`;
        popperElement.style.transform = `translate(0, -50%)`;
      } else if (placement === 'left') {
        popperElement.style.top = `${(wrapperBoundingRect.bottom + wrapperBoundingRect.top) / 2 + windowScrollY}px`;
        popperElement.style.left = `${windowScrollX + wrapperBoundingRect.right}px`;
        popperElement.style.transform = `translate(calc(-100% - ${wrapperBoundingRect.width}px - ${gap}px), -50%)`;
      }

      // 기본 위치가 window를 벗어났을 경우
      const popperBoundingRect = popperElement.getBoundingClientRect();
      if (popperBoundingRect.width >= windowClientWidth) {
        // popper의 너비가 viewport 너비보다 클 경우
        popperElement.style.width = '100%';
        popperElement.style.left = `${windowScrollX}px`;
        popperElement.style.transform = `translate(0, ${placement === 'top' ? '-100%' : '0'})`;
      } else if (windowScrollX + popperBoundingRect.left < 0) {
        // window 왼쪽으로 벗어났을 경우
        popperElement.style.left = `0px`;
        popperElement.style.transform = `translate(0, ${placement === 'top' ? '-100%' : '0'})`;
      } else if (windowScrollX + popperBoundingRect.right > windowScrollWidth) {
        // window 오른쪽으로 벗어났을 경우
        popperElement.style.left = `${windowScrollWidth - (popperBoundingRect.width + gap)}px`;
        popperElement.style.transform = `translate(0, ${placement === 'top' ? '-100%' : '0'})`;
      }

      if (popperBoundingRect.y < 0) {
        const { left } = popperElement.getBoundingClientRect();
        popperElement.style.top = `0px`;
        popperElement.style.left = `${left}px`;
        popperElement.style.transform = `translate(0, 0)`;
      }
    }
  };

  const onMouseEnter = (e: React.MouseEvent) => {
    children.props.onMouseEnter?.(e);

    if (disabled) return;
    renderTooltip();
  };

  const onFocus = (e: React.FocusEvent<HTMLElement>) => {
    animation.current?.cancel();
    children.props.onFocus?.(e);
    renderTooltip();
  };

  const onMouseLeave = (e: React.MouseEvent) => {
    children.props.onMouseLeave?.(e);
    clearTooltipDelay();
    removePopper();
  };

  const onBlur = (e: React.FocusEvent<HTMLElement>) => {
    children.props.onBlur?.(e);
    clearTooltipDelay();
    removePopper();
  };

  const createPopper = useCallback(() => {
    const newContainer = document.createElement('div');
    document.body.appendChild(newContainer);
    setContainer(newContainer);
  }, []);

  const clearTooltipDelay = () => {
    if (!tooltipDelayTimer.current) return;
    clearTimeout(tooltipDelayTimer.current);
    tooltipDelayTimer.current = null;
  };

  const removePopper = useCallback(() => {
    if (!popperRef.current) return;

    animation.current = popperRef.current.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 300,
      easing: 'cubic-bezier(0.31, -0.06, 0.68, 1)',
      delay: 300,
    });
    animation.current.onfinish = () => {
      container?.remove();
      setContainer(null);
      animation.current = null;
    };
  }, [container]);

  useEffect(() => {
    const onmouseenter = () => {
      animation.current?.cancel();
    };
    const onmouseleave = () => {
      removePopper();
    };

    if (container) {
      container.addEventListener('mouseenter', onmouseenter);
      container.addEventListener('mouseleave', onmouseleave);
    }

    return () => {
      container?.removeEventListener('mouseenter', onmouseenter);
      container?.removeEventListener('mouseleave', onmouseleave);
    };
  }, [container, removePopper]);

  useEffect(() => {
    // NOTE: ESC key로 popper를 제거할 수 있어야 함
    function onKeyDownESC(e: KeyboardEvent) {
      if (e.code === 'Escape') removePopper();
    }
    document.addEventListener('keydown', onKeyDownESC);
    return () => {
      document.removeEventListener('keydown', onKeyDownESC);
    };
  }, [removePopper]);

  return (
    <Wrapper ref={wrapperRef} fullWidth={fullWidth}>
      {React.cloneElement(children, {
        ...children.props,
        tabIndex: 0,
        onMouseEnter,
        onMouseLeave,
        onFocus,
        onBlur,
      })}
      <Portal container={container}>
        <Popper ref={popperRef} role="tooltip" style={{ zIndex }} {...props}>
          {title}
        </Popper>
      </Portal>
    </Wrapper>
  );
};
