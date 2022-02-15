import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { grayscale50, grayscale800, grayscale200, grayscale500 } from '../../core/colors';
import { primary } from '../../core/styles/palette';
interface RadioStyleProps {
  isDisabled: boolean;
  isSelected: boolean;
}

const RadioButtonContainer = styled.label<RadioStyleProps>`
  display: block;
  position: relative;
  width: fit-content;
  padding-left: 1.75rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.5rem;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  color: ${({ isDisabled }) => (isDisabled ? grayscale500 : grayscale800)};
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
`;

const Checkmark = styled.span<RadioStyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 1px solid ${({ isDisabled, isSelected }) => (!isDisabled && isSelected ? primary : grayscale200)};
  background-color: ${({ isSelected }) => (isSelected ? grayscale50 : 'white')};

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
      {children}
      <input
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        onChange={() => onChange(value)}
        checked={isSelected}
      />
      <Checkmark isSelected={isSelected} isDisabled={disabled} />
    </RadioButtonContainer>
  );
};
