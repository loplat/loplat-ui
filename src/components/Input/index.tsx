import React from 'react';
import styled from '@emotion/styled';
import {
  background,
  black500,
  blue500,
  blueScale500,
  danger300,
  grayScale200,
  grayScale500,
  white,
} from '../../core/Palette';
import { css } from '@emotion/css';

export interface InputProps {
  id?: string;
  fullWidth?: boolean;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter?: (e?: React.KeyboardEvent<HTMLInputElement>) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string | undefined;
  ref?: React.RefObject<HTMLInputElement>;
}

const BaseInput = styled.input<InputProps>`
  width: ${({ fullWidth }) => fullWidth && '100%'};
  height: auto;
  color: ${black500};
  background-color: white;
  border: 1px solid ${grayScale200};
  border-color: ${({ error }) => error && danger300};
  border-radius: 4px;
  padding: 15px 23px;
  outline: none;
  font-size: 16px;
  ::placeholder {
    color: ${blueScale500};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${grayScale500};
    border-color: ${grayScale200};
    background-color: ${background},
  }
  &:hover:not(:disabled) {
    color: ${({ error }) => !error && black500};
    border-color: ${({ error }) => !error && grayScale500};
    background-color: ${white};
  }
  &:focus:not(:disabled) {
    color: ${black500};
    border-color: ${({ error }) => !error && blue500};
  },
`;

const InlineError = React.memo(({ children }): React.ReactElement => {
  return (
    <div
      className={css`
        color: ${danger300};
        margin-top: 3px;
        font-size: 16px;
      `}
    >
      {children}
    </div>
  );
});

const Input = React.memo<InputProps>((props): React.ReactElement => {
  const id = props.id && props.value && `input-${props.value}`;
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
      `}
      aria-label="input"
    >
      <BaseInput
        id={id}
        {...props}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            props.onEnter && props.onEnter(e);
          }
        }}
      />
      {props.error && props.errorMessage && <InlineError>{props.errorMessage}</InlineError>}
    </div>
  );
});

export default Input;
