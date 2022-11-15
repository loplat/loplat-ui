import { BoxSpacing, MarginSpacing } from '../../../core/Spacing';
import React from 'react';

export type BaseRadioButtonProps = {
  /** 라디오 그룹 내에서 개별 인풋을 식별할 수 있는 값입니다.
   * user agent에는 보여지지 않는 값입니다.  */
  value: string;
  /** 라디오 인풋의 라벨 역할입니다. user agent에 보여집니다. */
  label: string | React.ReactElement;
  /** radio group은 동일한 name을 가지고 있어야 합니다. */
  name: string;
};

export type RadioButtonProps = BaseRadioButtonProps &
  MarginSpacing &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'name'>;

export type RadioButtonGroupProps = {
  /** 라디오버튼을 나열할 값을 입력해주세요. */
  list: Pick<RadioButtonProps, 'value' | 'label'>[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  /**
   * onChange로 변경되는 값을 할당합니다.
   * _label이 아닌 value 프로퍼티로 계산합니다._
   */
  selectedValue: BaseRadioButtonProps['value'];
  /** 동일한 value 속성의 라디오를 disabled 처리 합니다. */
  disabledValue?: BaseRadioButtonProps['value'];
  /** 라디오버튼의 정렬 방향 */
  direction?: 'column' | 'row';
} & Pick<RadioButtonProps, 'name'> &
  BoxSpacing &
  React.HTMLAttributes<HTMLDivElement>;
