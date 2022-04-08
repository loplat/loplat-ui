import React from 'react';
import styled from '@emotion/styled';
import { grayscale50, grayscale800, grayscale200, grayscale500 } from '../../core/colors';
import { blue100 } from '../../core/colors/blue';
import { primary } from '../../core/styles/palette';
import { BoxSpacing, MarginSpacing, marginSpacingProps, boxSpacingStyle, marginSpacingStyle } from '../../core/Spacing';

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

export const RadioButton = ({
  checked,
  name,
  value,
  disabled = false,
  label,
  className,
  id,
  ...props
}: RadioButtonProps): React.ReactElement => {
  return (
    <RadioButtonWrapper
      checked={checked}
      disabled={disabled}
      className={className}
      id={id}
      {...marginSpacingProps(props)}
    >
      <input type="radio" name={name} value={value} disabled={disabled} checked={checked} {...props} />
      <Radio className="radio" />
      {label}
    </RadioButtonWrapper>
  );
};

const RadioButtonWrapper = styled.label<Pick<RadioButtonProps, 'disabled' | 'checked'> & MarginSpacing>`
  ${marginSpacingStyle};
  position: relative;
  display: flex;
  align-items: center;

  width: fit-content;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: ${({ checked }) => (checked ? 'bold' : 'normal')};
  color: ${({ disabled }) => (disabled ? grayscale500 : grayscale800)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  input[type='radio'] {
    position: absolute;
    opacity: 0;

    &:focus-visible ~ span {
      outline: 2px solid ${primary};
      background-color: ${blue100};
    }

    &:checked ~ span.radio {
      border-color: ${primary};
      background-color: ${grayscale50};
      :after {
        display: 'block';
        background-color: ${primary};
      }
    }

    &:disabled ~ span.radio {
      border-color: ${grayscale200};
      :after {
        background-color: ${({ checked }) => (checked ? grayscale500 : 'transparent')};
      }
    }
  }
`;

const Radio = styled.span`
  position: relative;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 1px solid;
  background-color: white;
  margin-right: 8px;

  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
`;

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
  React.HtmlHTMLAttributes<HTMLDivElement>;

export const RadioButtonGroup = ({
  onChange,
  list,
  name,
  disabledValue,
  selectedValue,
  direction = 'column',
  ...props
}: RadioButtonGroupProps) => {
  return (
    <Wrapper {...props} direction={direction} data-testid="loplat-ui__group">
      {list.map(({ value, label }) => (
        <RadioButton
          key={value}
          value={value}
          label={label}
          name={name}
          checked={value === selectedValue}
          onChange={onChange}
          disabled={disabledValue ? value === disabledValue : false}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div<BoxSpacing & Pick<RadioButtonGroupProps, 'direction'>>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  ${boxSpacingStyle};

  > label:not(:last-of-type) {
    ${({ direction }) => (direction === 'column' ? `margin-bottom: 12px` : `margin-right: 16px`)};
  }
`;
