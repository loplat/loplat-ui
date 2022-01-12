import React, { useCallback, useEffect, useState } from 'react';
import { ToastItem } from '../core/types';
import Toaster from '../core/toaster';
import { ToastBar } from './ToastBar';
import styled from '@emotion/styled';

export interface Props {
  zIndex?: number;
}

export let toast: Toaster = new Toaster(null);

export const Toast = ({ zIndex = 9999 }: Props): React.ReactElement => {
  const [toastItems, setToastItems] = useState<ToastItem[]>([]);
  const [heightOfToastBars, setHeightOfToastBars] = useState<{ id: ToastItem['id']; height: number }[]>([]);

  useEffect(() => {
    /** Initialize */
    toast = new Toaster(setToastItems);
  }, []);

  const removeToastItem = useCallback((toastId) => {
    toast.removeToastItem(toastId);
    removeHeightItem(toastId);
  }, []);

  const removeHeightItem = (toastId: ToastItem['id']) => {
    setHeightOfToastBars((state) => {
      const indexToRemove = state.findIndex((heightItem) => heightItem.id === toastId);
      if (indexToRemove > -1) {
        return [...state.slice(0, indexToRemove), ...state.slice(indexToRemove + 1)];
      }
      return state;
    });
  };

  const addHeightOfToastBars = useCallback((toastId, height) => {
    setHeightOfToastBars((state) => [{ id: toastId, height }, ...state]);
  }, []);

  const calculateOffsetYByIndex = (index: number): number => {
    const gap = 8;
    /** index보다 앞에 있는 ToastBar의 height를 모두 더하여 offsetY를 구한다. */
    return heightOfToastBars.slice(0, index).reduce((acc, curr) => acc + curr.height + gap, 0);
  };

  return (
    <ToastWrapper zIndex={zIndex}>
      {toastItems.map((toastItem, index) => (
        <ToastBar
          toastItem={toastItem}
          onRemoveToastItem={removeToastItem}
          onEmitElementHeight={addHeightOfToastBars}
          offsetY={calculateOffsetYByIndex(index)}
          key={toastItem.id}
        />
      ))}
    </ToastWrapper>
  );
};

const ToastWrapper = styled.div<Props>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: none;
`;
