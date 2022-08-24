import React from 'react';

export type DefaultTabValue = string;
export type TabProps<T extends string = DefaultTabValue> = {
  value: T;
  label?: string | React.ReactElement;
  isDisabled?: boolean;
  isSelected: boolean;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'>;

export type TabListType = 'ellipse' | 'rectangle';
export type TabListProps<T extends string = DefaultTabValue> = {
  /** TabList의 type입니다. */
  type?: TabListType;
  /** tab option들의 정보를 담은 배열입니다. */
  options: Omit<TabProps<T>, 'isSelected'>[];
  /** 현재 선택된 tab의 value 입니다. */
  selectedValue: TabProps<T>['value'];
  /** 새로 선택된 value가 기존의 selectedValue와 다를 경우 실행됩니다. */
  onChange: (event: React.MouseEvent<HTMLDivElement>, value: TabProps<T>['value']) => void;
  /** custom style을 설정할 수 있습니다. */
  styles?: DeepPartial<TabListStyles>;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;

export type DecoratorPosition = {
  left: number;
  width: number;
};

export type TabListStyles = {
  tabList: {
    backgroundColor: string;
    borderRadius: number;
    boxShadow?: string;
  };
  tab: {
    color: string;
    backgroundColor: string;
    activeColor: string;
    activeBackgroundColor: string;
    borderRadius: number;
    boxShadow?: string;
  };
};
