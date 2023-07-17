import type { ChangeEvent, ReactElement, InputHTMLAttributes } from 'react';
import type { MarginSpacing } from '../../core/Spacing';

export type BaseLabel = {
  /** 체크 여부와 중간값을 할당할 수 있습니다.*/
  checked?: boolean | 'checked' | 'unchecked' | 'intermediate';
  disabled?: boolean;
};

export type CheckboxProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  /** `label`과 `input`을 연동하는 속성입니다. form을 이용해 submit될 때, key값입니다.*/
  name: string;
  /** 체크박스와 연동된 `label`태그입니다.*/
  children: string | ReactElement;
} & BaseLabel &
  MarginSpacing &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'id' | 'name' | 'children' | 'onChange' | 'disabled'>;
