import React from 'react';
import { MarginSpacing } from '../../core/Spacing';

export type BaseLabel = {
  /** `label`의 폰트굵기를 굵게 만듭니다.*/
  boldLabel?: boolean;
  disabled?: boolean;
  /** 체크 여부와 중간값을 할당할 수 있습니다.*/
  checked?: boolean | 'checked' | 'unchecked' | 'intermediate';
};

export type CheckboxProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** `label`과 `input`을 연동하는 속성입니다. form을 이용해 submit될 때, key값입니다.*/
  name: string;
  /** 체크박스와 연동된 `label`태그입니다.*/
  label: string;
} & BaseLabel &
  MarginSpacing &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'checked'>;
