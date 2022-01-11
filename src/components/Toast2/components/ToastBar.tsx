import React, { useEffect, useRef } from 'react';
import { ToastItem } from '../core/toaster';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { IconButton } from '../../IconButton';
import { Close } from '../../../assets/Icon/generated/Close';

interface Props {
  toastItem: ToastItem;
  onRemoveToastItem: (toastId: string) => void;
}

const opacityAnimationDuration = 300;
const toastDuration = 3000 + opacityAnimationDuration;

export const ToastBar = ({ toastItem, onRemoveToastItem }: Props): React.ReactElement => {
  const toastBarElement = useRef<HTMLDivElement>(null);

  const setOpacity = (opacity: number) => {
    if (toastBarElement.current) {
      toastBarElement.current.style.opacity = `${opacity}`;
    }
  };

  useEffect(() => {
    setOpacity(1);

    const timeoutForRemove = setTimeout(() => {
      onRemoveToastItem(toastItem.id);
    }, toastDuration);

    const timeoutForOpacity = setTimeout(() => {
      setOpacity(0);
    }, toastDuration - opacityAnimationDuration);

    return () => {
      clearTimeout(timeoutForRemove);
      clearTimeout(timeoutForOpacity);
    };
  }, [toastItem, onRemoveToastItem]);

  return (
    <ToastBarBox
      ref={toastBarElement}
      className={css`
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        transition: transform 300ms, opacity ${opacityAnimationDuration}ms;
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
