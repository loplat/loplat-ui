import React from 'react';

export type DefaultDropdownValue = string;
export type DropdownChangeEvent = MouseEvent | KeyboardEvent;
type Children = { children: React.ReactNode };

export type DropdownTypes<T extends string = DefaultDropdownValue> = {
  container: Element | null;
  triggerRef: React.RefObject<HTMLElement> | null;
  optionListRef: React.RefObject<HTMLUListElement> | null;
  close: () => void;
  toggle: () => void;
  value: T;
  onChange: (e: DropdownChangeEvent, value: T) => void;
  expanded: boolean;
  disabled: boolean;
  multiple: boolean;
};

export type DropdownProps<T extends string = DefaultDropdownValue> = {
  onChange: DropdownTypes<T>['onChange'];
  disabled?: boolean;
  multiple?: boolean;
} & Children;

export type DropdownBarProps<T extends string = DefaultDropdownValue> = {
  value?: T;
  placeholder?: string;
  expanded?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export type OptionListProps = {
  zIndex?: number;
} & Children &
  React.HTMLAttributes<HTMLUListElement>;

export type OptionProps<T extends string = DefaultDropdownValue> = {
  value: T;
  label?: T | React.ReactElement;
  selected?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLLIElement>;
