import React, { useEffect, useMemo, useRef } from 'react';
import { Body } from '../../../core/Typography/Body';
import { Close as CloseIcon } from '../../../assets/Icon/generated/Close';
import { CheckcircleFillIcon } from '../../../assets/Icon';
import { spacing } from '../../../core/Spacing';
import { ToastItem } from '../core/types';
import { generateColorSet } from '../core/utils';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

interface Props {
  toastItem: ToastItem;
  onRemoveToastItem: (toastId: string) => void;
  onEmitElementHeight: (toastId: string, height: number) => void;
  offsetY: number;
}

const MINIMUM_CONTENT_HEIGHT = 28;
const animationDuration = 350;
const toastDuration = 3000 + animationDuration;

export const ToastBar = ({ toastItem, onRemoveToastItem, onEmitElementHeight, offsetY }: Props): React.ReactElement => {
  const toastBarElement = useRef<HTMLDivElement>(null);
  const colorSet = useMemo(() => generateColorSet(toastItem.type), [toastItem]);

  const setOpacity = (opacity: number) => {
    if (toastBarElement.current) {
      toastBarElement.current.style.opacity = `${opacity}`;
    }
  };

  // lifecycle 관련
  useEffect(() => {
    setOpacity(1);

    const timeoutForRemove = setTimeout(() => {
      onRemoveToastItem(toastItem.id);
    }, toastDuration);

    const timeoutForOpacity = setTimeout(() => {
      setOpacity(0);
    }, toastDuration - animationDuration);

    return () => {
      clearTimeout(timeoutForRemove);
      clearTimeout(timeoutForOpacity);
    };
  }, [toastItem, onRemoveToastItem]);

  // offsetY 관련
  useEffect(() => {
    if (toastBarElement.current) {
      onEmitElementHeight(toastItem.id, toastBarElement.current.clientHeight);
    }
  }, [toastItem, onEmitElementHeight]);

  return (
    <ToastBarBox
      ref={toastBarElement}
      className={css`
        position: absolute;
        top: ${spacing(4)}px;
        left: 50%;
        transform: translate(-50%, ${offsetY}px);
        opacity: 0;
        transition: transform ${animationDuration}ms, opacity ${animationDuration}ms;
        border-color: ${colorSet.borderColor};
        background-color: ${colorSet.backgroundColor};
      `}
    >
      <CheckcircleFillIcon size={MINIMUM_CONTENT_HEIGHT} fillColor={colorSet.iconColor} />
      <Message color={colorSet.textColor}>{toastItem.message}</Message>
      <CloseButton onClick={() => onRemoveToastItem(toastItem.id)}>
        <CloseIcon size={18} fillColor={colorSet.iconColor} />
      </CloseButton>
    </ToastBarBox>
  );
};

const ToastBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 37.5rem;
  max-width: 100%;
  padding: ${spacing(4)}px;
  box-sizing: border-box;

  border-radius: 4px;
  border-width: 1px;
  border-style: solid;

  pointer-events: auto;
  box-shadow: 0 2px 6px 0 rgba(209, 209, 209, 0.3);
`;

const Message = styled(Body)`
  width: 100%;
  min-height: ${MINIMUM_CONTENT_HEIGHT}px;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 ${spacing(2)}px;
`;

const CloseButton = styled.button`
  border: none;
  background: none;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  height: ${MINIMUM_CONTENT_HEIGHT}px;
  padding: 0;
`;
