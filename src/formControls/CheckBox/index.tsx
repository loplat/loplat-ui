import React from 'react';
import styled from '@emotion/styled';
import { blue500, black300, grayScale200, grayScale500, grayScale100 } from '../../core/Palette';
import CheckedIcon from './image/icon-check.svg';
import DisabledCheckedIcon from './image/icon-check-disabled.svg';
import CheckMinusIcon from './image/icon-minus.svg';
import DisabledMinusIcon from './image/icon-minus-disabled.svg';

type BaseWrapper = {
  boldLabel?: boolean;
  disabled?: boolean;
  checked: boolean | 'checked' | 'unchecked' | 'intermediate';
};

export type CheckBoxProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  className?: string;
} & BaseWrapper;

export const CheckBox = ({ label, name, checked, onChange, disabled, ...props }: CheckBoxProps): JSX.Element => {
  const isChecked: boolean = typeof checked === 'string' ? checked !== 'unchecked' : checked;

  return (
    <StyledWrapper checked={checked} disabled={disabled} {...props} data-testid="wrapper">
      <label htmlFor={name}>
        <input type="checkbox" id={name} name={name} checked={isChecked} onChange={onChange} disabled={disabled} />
        <span />
        {label}
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<BaseWrapper>`
  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;
    color: ${({ disabled }) => (disabled ? grayScale500 : black300)};
    font-weight: ${({ boldLabel }) => (boldLabel ? 600 : 400)};
  }

  input[type='checkbox'] {
    display: none;
    & + span {
      display: inline-block;
      width: 1.25rem;
      height: 1.25rem;
      border: 1px solid ${grayScale200};
      border-radius: 4px;
      background-color: white;
      margin-right: 0.5rem;
    }
    &:checked + span {
      border-color: ${blue500};
      background: url(${({ checked }) => (checked === 'intermediate' ? CheckMinusIcon : CheckedIcon)}) center no-repeat;
    }
    &:disabled + span {
      border-color: ${grayScale200};
      ${({ checked }) =>
        checked === 'checked' || checked === true
          ? `background: url(${DisabledCheckedIcon}) center no-repeat;`
          : checked === 'intermediate'
          ? `background: url(${DisabledMinusIcon}) center no-repeat`
          : ``};
      background-color: ${grayScale100};
    }
  }
`;
