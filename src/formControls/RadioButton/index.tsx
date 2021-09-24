import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { background, black300, blue500, grayScale500 } from '../../core/Palette';

interface RadioStyleProps {
  isDisabled: boolean;
  isSelected: boolean;
}

const RadioButtonContainer = styled.label(
  `
  display: block;
  position: relative;
  padding-left: 28px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`,
  ({ isSelected, isDisabled }: RadioStyleProps) => `
    font-weight: ${isSelected ? 'bold' : 'normal'};
    color: ${isDisabled ? grayScale500 : black300};
    pointer-events: ${isDisabled ? 'none' : 'auto'};
  `,
);

const Checkmark = styled.span(
  `
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    box-sizing: border-box;
    
    :after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
`,
  ({ isSelected, isDisabled }: RadioStyleProps) => `
    border: 1px solid ${!isDisabled && isSelected ? blue500 : grayScale500};
    background-color: ${isSelected ? background : 'white'};
    :after {
      background: ${isDisabled ? grayScale500 : blue500};
      display: ${isSelected ? 'block' : 'none'};
    }
`,
);

export interface RadioButtonProps {
  selected: string;
  value: string;
  onChange: (value: string) => void;
  children: string | React.ReactElement;
  name: string;
  disabled?: boolean;
}

const RadioButton = ({
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
      <input type="radio" name={name} value={value} disabled={disabled} onClick={() => onChange(value)} />
      <Checkmark isSelected={isSelected} isDisabled={disabled} />
    </RadioButtonContainer>
  );
};

export default React.memo(RadioButton);
