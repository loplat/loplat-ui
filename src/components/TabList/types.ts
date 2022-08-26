import React from 'react';

export type TabProps = {
  value: string;
  label?: string | React.ReactElement;
  isDisabled?: boolean;
  isSelected: boolean;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'>;

export type TabListProps = {
  /** tab option들의 정보를 담은 배열입니다. */
  options: Omit<TabProps, 'isSelected'>[];
  /** 현재 선택된 tab의 value 입니다. */
  selectedValue: TabProps['value'];
  /** 새로 선택된 value가 기존의 selectedValue와 다를 경우 실행됩니다. */
  onChange: (event: React.MouseEvent<HTMLDivElement>, value: TabProps['value']) => void;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;

export type DecoratorCss = {
  left: number;
  width: number;
};
