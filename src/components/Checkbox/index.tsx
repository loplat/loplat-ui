import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { blue500, grayscale800, grayscale200, grayscale500, grayscale100, grayscale300 } from '../../core/colors';
import { primary } from '../../core/styles/palette';
import { MarginSpacing, marginSpacingProps, marginSpacingStyle } from '../../core/Spacing';
import { CheckboxProps, BaseLabel } from './types';

export const Checkbox = ({
  label,
  name,
  checked = false,
  onChange,
  disabled,
  boldLabel,
  className,
  id,
  ...props
}: CheckboxProps): JSX.Element => {
  const isChecked: boolean = typeof checked === 'boolean' ? checked : checked === 'checked';
  const isIntermediate: boolean = checked === 'intermediate';

  return (
    <Label
      isIntermediate={isIntermediate}
      boldLabel={boldLabel}
      disabled={disabled}
      {...marginSpacingProps(props)}
      className={className}
      id={id}
    >
      <input type="checkbox" name={name} checked={isChecked} onChange={onChange} disabled={disabled} {...props} />
      {/* TODO: label, input을 형제 관계로 변경하기 */}
      <Checkmark onClick={(e) => e.stopPropagation()} className="checkmark" />
      <span onClick={(e) => e.stopPropagation()}>{label}</span>
    </Label>
  );
};

const Label = styled.label<Pick<BaseLabel, 'boldLabel' | 'disabled'> & MarginSpacing & { isIntermediate: boolean }>`
  ${marginSpacingStyle};
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: ${({ boldLabel }) => (boldLabel ? 600 : 400)};
  color: ${({ disabled }) => (disabled ? grayscale500 : grayscale800)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;

    &:checked ~ .checkmark {
      border-color: ${blue500};
      ::after {
        width: 0.7rem;
        height: 0.35rem;
        transform: translate(-50%, -80%) rotate(-45deg);
        border: 2px solid ${blue500};
        border-top: 0;
        border-right: 0;
        box-sizing: border-box;
      }
    }
    &:not(:checked) ~ .checkmark {
      ${({ isIntermediate }) =>
        isIntermediate &&
        css`
          border-color: ${blue500};
          ::after {
            border-color: ${blue500};
            width: 0.7rem;
            height: 0;
            transform: translate(-50%, -50%);
            border-bottom: 2px solid ${blue500};
            box-sizing: border-box;
          }
        `}
    }
    &:disabled ~ .checkmark {
      border-color: ${grayscale200};
      background-color: ${grayscale100};
      &::after {
        border-color: ${grayscale500};
      }
    }
    &:hover:not(:checked) ~ .checkmark {
      border-color: ${grayscale300};
    }
    &:focus-visible ~ .checkmark {
      outline: 2px solid ${primary};
    }
  }
`;

const Checkmark = styled.span`
  position: relative;
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid ${grayscale200};
  border-radius: 4px;
  background-color: white;
  margin-right: 0.5rem;

  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;
