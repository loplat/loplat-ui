import { AriaRole } from 'react';

export type ToastType = 'success' | 'info' | 'danger' | 'warning' | 'white';
export type ToastRole = Extract<AriaRole, 'alert' | 'status'>;

export interface ToastItem {
  id: string;
  type: ToastType;
  message: string;
  role: ToastRole;
}

// TODO: color palette type 도입 후 적용하기
export interface ColorSet {
  borderColor: string;
  backgroundColor: string;
  textColor: string;
  iconColor: string;
}
