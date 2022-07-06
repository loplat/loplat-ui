import React from 'react';

export type TabProps = {
  value: string;
  label?: string | React.ReactElement;
  isDisabled?: boolean;
  isSelected: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type TabListProps = {
  /** tab들의 정보를 담은 배열입니다. */
  tabs: Omit<TabProps, 'isSelected'>[];
  /** 현재 선택된 tab의 value 입니다. */
  selectedValue: TabProps['value'];
  /** click한 tab이 현재 선택된 tab과 다를 경우 실행됩니다. */
  onChange: (event: React.SyntheticEvent, value: TabProps['value']) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export type DecoratorCss = {
  left: number;
  width: number;
};
