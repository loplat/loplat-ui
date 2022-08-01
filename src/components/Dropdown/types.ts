import React from 'react';

export type DropdownValue = string;
export type DropdownChangeEvent = MouseEvent | KeyboardEvent;
type Children = { children: React.ReactElement[] };

export type DropdownTypes = {
  container: Element | null;
  triggerRef: React.RefObject<HTMLElement> | null;
  optionListRef: React.RefObject<HTMLUListElement> | null;
  close: () => void;
  toggle: () => void;
  value: DropdownValue;
  onChange: (e: DropdownChangeEvent, value: DropdownValue) => void;
  expanded: boolean;
  disabled: boolean;
  multiple: boolean;
};

export type DropdownProps = {
  onChange: DropdownTypes['onChange'];
  disabled?: boolean;
  multiple?: boolean;
} & Children;

export type DropdownBarProps = {
  value?: DropdownValue;
  placeholder?: string;
  expanded?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export type OptionListProps = {
  zIndex?: number;
} & Children &
  React.HTMLAttributes<HTMLUListElement>;

export type OptionProps = {
  value: DropdownValue;
  label?: DropdownValue | React.ReactElement;
  selected?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLLIElement>;
