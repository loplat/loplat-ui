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

  useEffect(() => {
    toast = new Toaster(setToastItems);
  }, []);

  const removeToastItem = useCallback((toastId) => {
    toast.removeToastItem(toastId);
  }, []);

  return (
    <div
      className={css`
        z-index: ${zIndex};
      `}
    >
      {toastItems.map((toastItem, index) => (
        <ToastBar toastItem={toastItem} onRemoveToastItem={removeToastItem} key={toastItem.id} />
      ))}
    </div>
  );
};
