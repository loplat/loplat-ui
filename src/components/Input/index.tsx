import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { primary, danger } from '../../core/styles/palette';
import { white, bluescale500, grayscale500, grayscale200, bluescale50, grayscale900 } from '../../core/colors';
import { css } from '@emotion/css';
import { spacing } from '../../core/Spacing';
import { generateUniqueId } from '../../utils/functions';

export interface InputProps {
  id?: string;
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
  title?: string;
}
type RightIconProps = Pick<InputProps, 'isIconVisible' | 'disabled'>;

const BaseInput = styled.input<InputProps>`
  width: 100%;
  height: auto;
  color: ${grayscale900};
  background-color: white;
  border: 1px solid ${grayscale200};
  border-color: ${({ error }) => error && danger};
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
  padding: ${({ isIconVisible }) =>
    isIconVisible
      ? `${spacing(4)}px ${spacing(12)}px ${spacing(4)}px ${spacing(6)}px`
      : `${spacing(4)}px ${spacing(6)}px`};
  transition: border-color ease 0.3s;

  ::placeholder {
    color: ${bluescale500};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${grayscale500};
    border-color: ${grayscale200};
    background-color: ${bluescale50};
  }
  &:hover:not(:disabled) {
    color: ${({ error }) => !error && grayscale900};
    border-color: ${({ error }) => !error && grayscale500};
    background-color: ${white};
  }
  &:focus:not(:disabled) {
    color: ${grayscale900};
    border-color: ${({ error }) => !error && primary};
  }

  g > path {
    fill: ${({ disabled }) => disabled && grayscale500};
  }
`;

const RightIconContainer = styled.div<RightIconProps>`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  opacity: ${({ isIconVisible }) => (isIconVisible ? 1 : 0)};
  transition: opacity 0.2s linear;
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const InlineError = React.memo(({ children }): React.ReactElement => {
  return (
    <p
      role="alert"
      className={css`
        color: ${danger};
        margin: 3px 0 0 0;
        font-size: 1rem;
        width: 100%;
      `}
    >
      {children}
    </p>
  );
});

export const Input = React.memo<InputProps>(({ className = '', ...props }): React.ReactElement => {
  const uniqueId = useMemo(() => generateUniqueId(), []);
  const id = useMemo(() => props.id || uniqueId, [props.id, uniqueId]);
  return (
    <div
      className={`${css`
        display: flex;
        flex-flow: column;
        width: 100%;
      `} ${className}`}
      aria-label="input"
      role="textbox"
    >
      <div
        className={`${css`
          position: relative;
          display: flex;
          width: 100%;
        `}`}
      >
        <BaseInput
          {...props}
          id={id}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              props.onEnter && props.onEnter(e);
            }
          }}
        />
        {props.rightIcon && (
          <RightIconContainer disabled={props.disabled} isIconVisible={props.isIconVisible} aria-label="warning icon">
            {props.rightIcon}
          </RightIconContainer>
        )}
      </div>

      {props.error && props.errorMessage && <InlineError>{props.errorMessage}</InlineError>}
    </div>
  );
});
