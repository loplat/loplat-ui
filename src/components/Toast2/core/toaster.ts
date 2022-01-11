import React, { SetStateAction } from 'react';
import { ToastItem } from './types';
import { generateUniqueId } from './utils';

type SetToastItems = React.Dispatch<SetStateAction<ToastItem[]>>;

class Toaster {
  setToastItems: SetToastItems = () => {
    return;
  };

  constructor(setState: SetToastItems | null) {
    if (setState) this.setToastItems = setState;
  }

  addToastItem({ type, message }: Omit<ToastItem, 'id'>): void {
    this.setToastItems((state: ToastItem[]) => [{ id: generateUniqueId(), type, message }, ...state]);
  }

  removeToastItem(toastId: ToastItem['id']): void {
    this.setToastItems((state: ToastItem[]) => {
      const indexToRemove = state.findIndex((toastItem) => toastItem.id === toastId);
      if (indexToRemove > -1) {
        return [...state.slice(0, indexToRemove), ...state.slice(indexToRemove + 1)];
      }
      return state;
    });
  }

  success(message: ToastItem['message']): void {
    this.addToastItem({ type: 'success', message });
  }

  info(message: ToastItem['message']): void {
    this.addToastItem({ type: 'info', message });
  }

  danger(message: ToastItem['message']): void {
    this.addToastItem({ type: 'danger', message });
  }

  warning(message: ToastItem['message']): void {
    this.addToastItem({ type: 'warning', message });
  }

  white(message: ToastItem['message']): void {
    this.addToastItem({ type: 'white', message });
  }
}
export default Toaster;
