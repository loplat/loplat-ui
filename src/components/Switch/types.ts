import type { InputHTMLAttributes } from 'react';

export type Variant = 'outlined' | 'solid';
export type SwitchProps = {
  variant?: Variant;
  checked: boolean;
  width?: number;
  height?: number;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked'>;
