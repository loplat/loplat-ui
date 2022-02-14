import React, { SetStateAction } from 'react';
import { ToastItem, ToastRole } from './types';
import { generateUniqueId } from '../../../utils/functions';

type SetToastItems = React.Dispatch<SetStateAction<ToastItem[]>>;

class Toaster {
  setToastItems: SetToastItems = () => {
    return;
  };

  constructor(setState: SetToastItems | null) {
    if (setState) this.setToastItems = setState;
  }

  addToastItem({ type, message, role }: Omit<ToastItem, 'id'>): void {
    this.setToastItems((state: ToastItem[]) => [{ id: generateUniqueId(), type, message, role }, ...state]);
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

  success(message: ToastItem['message'], role: ToastRole = 'status'): void {
    this.addToastItem({ type: 'success', message, role });
  }

  info(message: ToastItem['message'], role: ToastRole = 'status'): void {
    this.addToastItem({ type: 'info', message, role });
  }

  danger(message: ToastItem['message'], role: ToastRole = 'alert'): void {
    this.addToastItem({ type: 'danger', message, role });
  }

  warning(message: ToastItem['message'], role: ToastRole = 'alert'): void {
    this.addToastItem({ type: 'warning', message, role });
  }

  white(message: ToastItem['message'], role: ToastRole = 'status'): void {
    this.addToastItem({ type: 'white', message, role });
  }
}
export default Toaster;
