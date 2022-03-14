import React from 'react';
import styled from '@emotion/styled';
import { grayscale50, grayscale800, grayscale200, grayscale500 } from '../../core/colors';
import { primary } from '../../core/styles/palette';

export interface RadioButtonProps {
  isChecked: boolean;
  name: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  children: string | React.ReactElement;
}

export const RadioButton = ({
  isChecked,
  name,
  value,
  onChange,
  disabled = false,
  children,
}: RadioButtonProps): React.ReactElement => {
  return (
    <RadioButtonContainer isChecked={isChecked} isDisabled={disabled}>
      <input
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        onChange={() => onChange(value)}
        checked={isChecked}
      />
      <Checkmark isChecked={isChecked} isDisabled={disabled} />
      {children}
    </RadioButtonContainer>
  );
};

interface RadioStyleProps {
  isDisabled: boolean;
  isChecked: boolean;
}

const RadioButtonContainer = styled.label<RadioStyleProps>`
  position: relative;
  display: flex;
  align-items: center;

  width: fit-content;
  line-height: 1.5;
  margin-bottom: 12px;

  font-size: 1rem;
  font-weight: ${({ isChecked }) => (isChecked ? 'bold' : 'normal')};
  color: ${({ isDisabled }) => (isDisabled ? grayscale500 : grayscale800)};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};

  input {
    position: absolute;
    opacity: 0;
  }
`;

const Checkmark = styled.span<RadioStyleProps>`
  position: relative;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 1px solid ${({ isDisabled, isChecked }) => (!isDisabled && isChecked ? primary : grayscale200)};
  background-color: ${({ isChecked }) => (isChecked ? grayscale50 : 'white')};
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
    background: ${({ isDisabled }) => (isDisabled ? grayscale500 : primary)};
    display: ${({ isChecked }) => (isChecked ? 'block' : 'none')};
  }
`;
