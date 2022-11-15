import React, { useCallback, useEffect, useRef, useState } from 'react';
import { spacing, tooltipZIndex } from '../../core';
import { Portal } from '../../utils';
import { TooltipProps } from './types';
import { Popper, Wrapper } from './styles';

export const Tooltip = ({
  children,
  title,
  placement = 'top',
  enterDelay = 0,
  zIndex = tooltipZIndex,
  ...props
}: TooltipProps): React.ReactElement => {
  const [container, setContainer] = useState<Element | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line import/no-unresolved
    import('web-animations-js');
  }, []);

  const renderTooltip = () => {
    // popper 생성, 렌더링
    if (animation.current === null) createPopper();
    if (animation.current) {
      animation.current.cancel();
      return;
    }

    // popper 위치 계산
    setTimeout(() => {
      const windowScrollY = window.scrollY;
      const windowScrollX = window.scrollX;
      const windowScrollWidth = document.body.scrollWidth;
      const windowClientWidth = document.body.clientWidth;

      const wrapperBoundingRect = wrapperRef.current!.getBoundingClientRect(); // eslint-disable-line @typescript-eslint/no-non-null-assertion
      const wrapperTop = windowScrollY + wrapperBoundingRect.top;
      const wrapperBottom = windowScrollY + wrapperBoundingRect.bottom;
      const wrapperHorizontalCenter = windowScrollX + wrapperBoundingRect.left + wrapperBoundingRect.width / 2;

      const popperElement = popperRef.current;
      if (popperElement) {
        // 기본 위치
        if (placement === 'top') {
          popperElement.style.top = `${wrapperTop - spacing(2)}px`;
          popperElement.style.left = `${wrapperHorizontalCenter}px`;
          popperElement.style.transform = 'translate(-50%, -100%)';
        } else if (placement === 'bottom') {
          popperElement.style.top = `${wrapperBottom + spacing(2)}px`;
          popperElement.style.left = `${wrapperHorizontalCenter}px`;
          popperElement.style.transform = 'translate(-50%, 0)';
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
          popperElement.style.left = `${windowScrollX + spacing(2)}px`;
          popperElement.style.transform = `translate(0, ${placement === 'top' ? '-100%' : '0'})`;
        } else if (windowScrollX + popperBoundingRect.right > windowScrollWidth) {
          // window 오른쪽으로 벗어났을 경우
          popperElement.style.left = `${windowScrollWidth - (popperBoundingRect.width + spacing(2))}px`;
          popperElement.style.transform = `translate(0, ${placement === 'top' ? '-100%' : '0'})`;
        }

        // show popper
        animation.current = popperRef.current.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 300,
          easing: 'cubic-bezier(0.31, -0.06, 0.68, 1)',
        });
        animation.current.onfinish = () => {
          popperElement.style.opacity = '1';
        };
      }
    }, enterDelay);
  };

  const onMouseOver = (e: React.MouseEvent) => {
    // children의 eventHandler 먼저 실행
    if (children.props.onMouseOver) {
      children.props.onMouseOver(e);
    }

    renderTooltip();
  };

  const onMouseLeave = (e: React.MouseEvent) => {
    // children의 eventHandler 먼저 실행
    if (children.props.onMouseLeave) {
      children.props.onMouseLeave(e);
    }
    // popper 제거
    removePopper();
  };

  const onFocus = (e: React.FocusEvent<HTMLElement>) => {
    if (animation.current) {
      animation.current.cancel();
    }

    if (children.props.onFocus) {
      children.props.onFocus(e);
    }

    renderTooltip();
  };

  const onBlur = (e: React.FocusEvent<HTMLElement>) => {
    if (children.props.onBlur) {
      children.props.onBlur(e);
    }

    removePopper();
  };

  const createPopper = useCallback(() => {
    const newContainer = document.createElement('div');
    document.body.appendChild(newContainer);
    setContainer(newContainer);
  }, []);

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
    const onmouseover = () => {
      if (animation.current) {
        animation.current.cancel();
      }
    };
    const onmouseleave = () => removePopper();

    if (container) {
      container.addEventListener('mouseover', onmouseover);
      container.addEventListener('mouseleave', onmouseleave);

      return () => {
        container.removeEventListener('mouseover', onmouseover);
        container.removeEventListener('mouseleave', onmouseleave);
      };
    }
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
    <Wrapper ref={wrapperRef}>
      {React.cloneElement(children, {
        ...children.props,
        onMouseOver,
        onMouseLeave,
        tabIndex: 0,
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
