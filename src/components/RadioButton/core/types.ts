import type { ReactElement, InputHTMLAttributes } from 'react';
import { MarginSpacing } from '../../../core/Spacing';

export type BaseRadioButtonProps = {
  /** 라디오 그룹 내에서 개별 인풋을 식별할 수 있는 값입니다.
   * user agent에는 보여지지 않는 값입니다.  */
  value: string;
  /** 라디오 인풋의 라벨 역할입니다. user agent에 보여집니다. */
  label: string | ReactElement;
  name: string;
};

export type RadioButtonProps = BaseRadioButtonProps &
  MarginSpacing &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'name' | 'label'>;
