import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { MarginSpacing, marginSpacingProps, marginSpacingStyle } from '../../../core/Spacing';
import { ToastItem, ToastPosition } from '../core/types';
import Toaster from '../core/toaster';
import { ToastBar } from './ToastBar';
import { toastZIndex } from '../../../core';

export interface Props extends MarginSpacing {
  /** 토스트가 화면에 띄어지는 시간입니다. `ms`단위입니다. */
  duration?: number;
  /** 토스트의 z-index값을 설정합니다. */
  zIndex?: number;
  /** 여러개의 토스트가 화면에 나타날 때, 토스트 사이의 간격을 설정합니다. */
  gap?: number;
  /** 토스트가 화면에 나타나는 위치를 결정합니다. */
  position?: ToastPosition;
}

export let toast: Toaster = new Toaster(null);

export const Toast = ({
  duration = 3000,
  zIndex = toastZIndex,
  gap = 8,
  position = 'top',
  ...props
}: Props): React.ReactElement => {
  const [toastItems, setToastItems] = useState<ToastItem[]>([]);
  const [heightOfToastBars, setHeightOfToastBars] = useState<{ id: ToastItem['id']; height: number }[]>([]);

  useEffect(() => {
    /** Initialize */
    toast = new Toaster(setToastItems);
  }, []);

  const removeToastItem = useCallback((toastId: ToastItem['id']) => {
    toast.removeToastItem(toastId);
    removeHeightItem(toastId);
  }, []);

  const removeHeightItem = (toastId: ToastItem['id']) => {
    setHeightOfToastBars((state) => state.filter(({ id }) => id !== toastId));
  };

  const addHeightOfToastBars = useCallback((toastId: ToastItem['id'], height: number) => {
    setHeightOfToastBars((state) => [{ id: toastId, height }, ...state]);
  }, []);

  const calculateOffsetYByIndex = (index: number): number => {
    /** index보다 앞에 있는 ToastBar의 height를 모두 더하여 offsetY를 구한다. */
    return heightOfToastBars.slice(0, index).reduce((acc, curr) => acc + curr.height + gap, 0);
  };

  return (
    <ToastWrapper zIndex={zIndex} {...marginSpacingProps(props)}>
      {toastItems.map((toastItem, index) => (
        <ToastBar
          toastItem={toastItem}
          onRemoveToastItem={removeToastItem}
          onEmitElementHeight={addHeightOfToastBars}
          offsetY={calculateOffsetYByIndex(index)}
          duration={duration}
          position={position}
          key={toastItem.id}
        />
      ))}
    </ToastWrapper>
  );
};

const ToastWrapper = styled.div<Omit<Props, 'gap'>>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  ${marginSpacingStyle};
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: none;
`;
