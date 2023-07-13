'use client';

import React, { ForwardedRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { blue500, grayscale800, grayscale200, grayscale500, grayscale100, grayscale400 } from '../../core/colors';
import { primary } from '../../core/styles/palette';
import { MarginSpacing, marginSpacingProps, marginSpacingStyle } from '../../core/Spacing';
import { CheckboxProps, BaseLabel } from './types';

export const Checkbox = React.forwardRef(
  (
    { children, name, checked = false, onChange, disabled, className, ...props }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    const isChecked: boolean = typeof checked === 'boolean' ? checked : checked === 'checked';
    const isIntermediate: boolean = checked === 'intermediate';
    const id = `loplat-ui__checkbox_${name}`;

    return (
      <CheckboxWrapper className={className} isIntermediate={isIntermediate} {...marginSpacingProps(props)}>
        <input
          type="checkbox"
          {...props}
          ref={ref}
          id={id}
          name={name}
          checked={isChecked}
          disabled={disabled}
          onChange={(e) => onChange?.(e, e.currentTarget.checked)}
        />
        <Label htmlFor={id} disabled={disabled}>
          <Checkmark className="checkmark" />
          <div>{children}</div>
        </Label>
      </CheckboxWrapper>
    );
  },
);

const CheckboxWrapper = styled.div<MarginSpacing & { isIntermediate: boolean }>`
  ${marginSpacingStyle};
  position: relative;
  display: flex;

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;

    &:checked ~ label .checkmark {
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

    &:not(:checked) ~ label .checkmark {
      ${({ isIntermediate }) =>
        isIntermediate
          ? css`
              border-color: ${blue500};
              ::after {
                border-color: ${blue500};
                width: 0.7rem;
                height: 0;
                transform: translate(-50%, -50%);
                border-bottom: 2px solid ${blue500};
                box-sizing: border-box;
              }
            `
          : ''}
    }

    &:hover:not(:checked) ~ label .checkmark {
      ${({ isIntermediate }) =>
        isIntermediate
          ? ''
          : css`
              border-color: ${grayscale400};
            `}
    }

    &:focus-visible ~ label .checkmark {
      outline: 2px solid ${primary};
    }

    &:disabled ~ label .checkmark {
      border-color: ${grayscale200};
      background-color: ${grayscale100};
      ::after {
        border-color: ${grayscale500};
      }
    }
  }
`;

const Label = styled.label<Pick<BaseLabel, 'disabled'>>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;

  ${({ disabled }) =>
    disabled
      ? css`
          color: ${grayscale500};
          cursor: not-allowed;
        `
      : css`
          color: ${grayscale800};
          cursor: pointer;
        `}
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

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;
