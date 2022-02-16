import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { grayscale50, grayscale800, grayscale200, grayscale500 } from '../../core/colors';
import { primary } from '../../core/styles/palette';

export interface RadioButtonProps {
  selected: string;
  value: string;
  onChange: (value: string) => void;
  children: string | React.ReactElement;
  name: string;
  disabled?: boolean;
}

export const RadioButton = ({
  selected,
  children,
  name,
  value,
  onChange,
  disabled = false,
}: RadioButtonProps): React.ReactElement => {
  const isSelected = useMemo(() => value === selected, [value, selected]);
  return (
    <RadioButtonContainer isSelected={isSelected} isDisabled={disabled}>
      <input
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        onChange={() => onChange(value)}
        checked={isSelected}
      />
      <Checkmark isSelected={isSelected} isDisabled={disabled} />
      {children}
    </RadioButtonContainer>
  );
};

interface RadioStyleProps {
  isDisabled: boolean;
  isSelected: boolean;
}

const RadioButtonContainer = styled.label<RadioStyleProps>`
  position: relative;
  display: flex;

  width: fit-content;
  line-height: 1.5;
  margin-bottom: 12px;

  font-size: 1rem;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  color: ${({ isDisabled }) => (isDisabled ? grayscale500 : grayscale800)};
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
  cursor: pointer;

  input {
    position: absolute;
  }
`;

const Checkmark = styled.span<RadioStyleProps>`
  position: relative;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 1px solid ${({ isDisabled, isSelected }) => (!isDisabled && isSelected ? primary : grayscale200)};
  background-color: ${({ isSelected }) => (isSelected ? grayscale50 : 'white')};
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
    display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
  }
`;
