import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { spacing } from '../../core';
import { generateUniqueId } from '../../functions/generator';
import { Portal } from '../../utils';
import { TooltipProps } from './types';
import { Popper, Wrapper } from './styles';

export const Tooltip = ({
  children,
  title,
  placement = 'top',
  enterDelay = 0,
  ...props
}: TooltipProps): React.ReactElement => {
  const portalId = useMemo(() => `loplat-ui-tooltip_${generateUniqueId()}`, []);
  const [container, setContainer] = useState<Element | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  const onMouseOver = (e: React.MouseEvent) => {
    // children의 eventHandler 먼저 실행
    if (children.props.onMouseOver) {
      children.props.onMouseOver(e);
    }

    // popper 생성, 렌더링
    createPopper();

    // popper 위치 계산
    setTimeout(() => {
      const windowScrollY = window.scrollY;
      const windowScrollX = window.scrollX;
      const windowScrollWidth = document.body.scrollWidth;
      const windowClientWidth = document.body.clientWidth;

      const wrapperBoundingRect = wrapperRef.current!.getBoundingClientRect();
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
        popperElement.style.opacity = '1';
      }
    }, enterDelay);
  };

  const onMouseLeave = (e: React.MouseEvent) => {
    // children의 eventHandler 먼저 실행
    if (children.props.onMouseLeave) {
      children.props.onMouseLeave(e);
    }
    // popper 제거
    removePopper();
  };

  const createPopper = useCallback(() => {
    const newContainer = document.createElement('div');
    newContainer.setAttribute('id', portalId);
    document.body.appendChild(newContainer);
    setContainer(newContainer);
  }, [portalId]);

  const removePopper = useCallback(() => {
    if (popperRef.current) {
      popperRef.current.style.opacity = '0';
    }
    setTimeout(() => {
      const containerDOM = document.getElementById(portalId) as HTMLDivElement;
      containerDOM?.remove();
    }, 300);
  }, [portalId]);

  useEffect(() => {
    // NOTE: ESC key로 popper를 제거할 수 있어야 함
    function onKeyDownESC(e: KeyboardEvent) {
      if (e.key === 'Escape') removePopper();
    }
    document.addEventListener('keydown', onKeyDownESC);
    return () => {
      document.removeEventListener('keydown', onKeyDownESC);
    };
  }, [removePopper, portalId]);

  return (
    <Wrapper ref={wrapperRef}>
      {React.cloneElement(children, { ...children.props, onMouseOver, onMouseLeave })}
      <Portal container={container}>
        <Popper ref={popperRef} role="tooltip" {...props}>
          {title}
        </Popper>
      </Portal>
    </Wrapper>
  );
};
