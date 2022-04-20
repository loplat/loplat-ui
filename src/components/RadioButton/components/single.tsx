import React from 'react';
import styled from '@emotion/styled';
import { grayscale50, grayscale800, grayscale200, grayscale500 } from '../../../core/colors';
import { blue100 } from '../../../core/colors/blue';
import { primary } from '../../../core/styles/palette';
import { MarginSpacing, marginSpacingProps, marginSpacingStyle } from '../../../core/Spacing';
import { RadioButtonProps } from '../core/types';

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
        display: block;
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
  border: 1px solid ${grayscale200};
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
