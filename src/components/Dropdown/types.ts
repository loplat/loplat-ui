import React from 'react';

export type DropdownValue = string;
export type DropdownChangeEvent = MouseEvent | KeyboardEvent;
export type DropdownProps = {
  options: { value: DropdownValue; label?: string | React.ReactElement; isDisabled: boolean }[];
  selectedValue: DropdownValue;
  onChange: (e: DropdownChangeEvent, value: DropdownValue) => void;
  disabled?: boolean;
  placeholder?: string;
  zIndex?: number;
} & React.HTMLAttributes<HTMLDivElement>;
