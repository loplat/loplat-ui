import React, { useEffect, useRef } from 'react';
import { ToastItem } from '../core/toaster';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { IconButton } from '../../IconButton';
import { Close } from '../../../assets/Icon/generated/Close';

interface Props {
  toastItem: ToastItem;
  onRemoveToastItem: (toastId: string) => void;
  onEmitElementHeight: (toastId: string, height: number) => void;
  offsetY: number;
}

const animationDuration = 350;
const toastDuration = 3000 + animationDuration;

export const ToastBar = ({ toastItem, onRemoveToastItem, onEmitElementHeight, offsetY }: Props): React.ReactElement => {
  const toastBarElement = useRef<HTMLDivElement>(null);

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
        top: 0;
        left: 50%;
        transform: translate(-50%, ${offsetY}px);
        transition: transform ${animationDuration}ms, opacity ${animationDuration}ms;
      `}
    >
      <p>{toastItem.message}</p>
      <IconButton icon={<Close />} onClick={() => onRemoveToastItem(toastItem.id)} />
    </ToastBarBox>
  );
};

const ToastBarBox = styled.div`
  opacity: 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 20.5rem;
  p {
    word-break: break-all;
  }
  min-height: 3.375rem;
  box-sizing: border-box;
  will-change: transform;
  pointer-events: auto;
  padding: 0.938rem;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 28px;

  background-color: white;
  border: 1px solid gray;
  margin-bottom: 16px;
`;
