import React, { SetStateAction } from 'react';

export interface ToastItem {
  id: string;
  type: 'success' | 'info' | 'danger' | 'warning' | 'default';
  message: string;
}

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

  danger(message: ToastItem['message']): void {
    this.addToastItem({ type: 'danger', message });
  }
}
export default Toaster;

function generateUniqueId() {
  return '_' + String(Math.random().toString(36).slice(2, 11));
}
