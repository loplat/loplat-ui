import React from 'react';

export type TabProps = {
  value: string;
  label?: string | React.ReactElement;
  isDisabled?: boolean;
  isSelected: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type TabListProps = {
  tabs: Omit<TabProps, 'isSelected'>[];
  selectedValue: TabProps['value'];
  onChange: (event: React.SyntheticEvent, value: TabProps['value']) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export type DecoratorCss = {
  left: number;
  width: number;
};
