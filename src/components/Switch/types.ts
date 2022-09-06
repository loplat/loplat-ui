import type { InputHTMLAttributes } from 'react';

export type Variant = 'outlined' | 'solid';
export type SwitchProps = {
  variant?: Variant;
  checked: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked'>;
