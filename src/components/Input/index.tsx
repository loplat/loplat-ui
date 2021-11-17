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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string | undefined;
  ref?: React.RefObject<HTMLInputElement>;
  type?: 'email' | 'password' | 'text';
  autoComplete?: 'username' | 'current-password' | 'new-password';
  rightIcon?: React.ReactElement;
  isIconVisible?: boolean;
}

const BaseInput = styled.input<InputProps>`
  width: ${({ fullWidth }) => fullWidth && '100%'};
  height: auto;
  color: ${black500};
  background-color: white;
  border: 1px solid ${grayScale200};
  border-color: ${({ error }) => error && danger300};
  border-radius: 4px;
  padding: 1rem 1.5rem;
  outline: none;
  font-size: 1rem;
  ::placeholder {
    color: ${blueScale500};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${grayScale500};
    border-color: ${grayScale200};
    background-color: ${background};
  }
  &:hover:not(:disabled) {
    color: ${({ error }) => !error && black500};
    border-color: ${({ error }) => !error && grayScale500};
    background-color: ${white};
  }
  &:focus:not(:disabled) {
    color: ${black500};
    border-color: ${({ error }) => !error && blue500};
  }
`;

const InlineError = React.memo(({ children }): React.ReactElement => {
  return (
    <p
      role="alert"
      className={css`
        color: ${danger300};
        margin-top: 3px;
        font-size: 1rem;
        width: 100%;
      `}
    >
      {children}
    </p>
  );
});

export const Input = React.memo<InputProps>(({ className = '', ...props }): React.ReactElement => {
  const id = props.id && props.value && `input-${props.value}`;
  return (
    <div
      className={`${css`
        display: flex;
        flex-flow: column;
        position: relative;
      `} ${className}`}
      aria-label="input"
      role="textbox"
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
      {props.rightIcon && (
        <div
          aria-label="warning icon"
          className={`${css`
            position: absolute;
            top: 0.938rem;
            right: 0.938rem;
            opacity: ${props.isIconVisible ? 1 : 0};
            transition: opacity 0.1s linear;
          `}`}
        >
          {props.rightIcon}
        </div>
      )}
      {props.error && props.errorMessage && <InlineError>{props.errorMessage}</InlineError>}
    </div>
  );
});
