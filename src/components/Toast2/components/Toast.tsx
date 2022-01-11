import React, { useCallback, useEffect, useState } from 'react';
import Toaster, { ToastItem } from '../core/toaster';
import { ToastBar } from './ToastBar';
import { css } from '@emotion/css';

export interface Props {
  zIndex?: number;
}

export let toast: Toaster = new Toaster(null);

export const Toast = ({ zIndex = 9999 }: Props): React.ReactElement => {
  const [toastItems, setToastItems] = useState<ToastItem[]>([]);
  const [heightOfToastBars, setHeightOfToastBars] = useState<{ id: ToastItem['id']; height: number }[]>([]);

  useEffect(() => {
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
    return heightOfToastBars.slice(0, index).reduce((acc, curr) => acc + curr.height + gap, 0);
  };

  return (
    <div
      className={css`
        z-index: ${zIndex};
      `}
    >
      {toastItems.map((toastItem, index) => (
        <ToastBar
          toastItem={toastItem}
          onRemoveToastItem={removeToastItem}
          onEmitElementHeight={addHeightOfToastBars}
          offsetY={calculateOffsetYByIndex(index)}
          key={toastItem.id}
        />
      ))}
    </div>
  );
};
