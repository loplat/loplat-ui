import React, { ForwardedRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { primary, danger } from '../../core/styles/palette';
import { white, bluescale500, grayscale500, grayscale200, bluescale50, grayscale900 } from '../../core/colors';
import { spacing } from '../../core/Spacing';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  rightIcon?: React.ReactElement;
  isIconVisible?: boolean;
}

const BaseInput = styled.input<Pick<InputProps, 'isIconVisible' | 'error'>>`
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
  box-sizing: border-box;
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
`;

const RightIconContainer = styled.div<Pick<InputProps, 'isIconVisible' | 'disabled'>>`
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

    g > path {
      fill: ${({ disabled }) => disabled && grayscale500};
    }
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

export const Input = React.forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>): React.ReactElement => {
  return (
    <>
      {props.rightIcon ? (
        <div
          className={`${css`
            position: relative;
            display: flex;
            width: 100%;
          `}`}
        >
          <BaseInput {...props} ref={ref} />
          <RightIconContainer
            disabled={props.disabled}
            isIconVisible={props.isIconVisible}
            data-testid="loplat-ui__rightIcon"
          >
            {props.rightIcon}
          </RightIconContainer>
        </div>
      ) : (
        <BaseInput {...props} ref={ref} />
      )}

      {props.error && props.errorMessage && <InlineError>{props.errorMessage}</InlineError>}
    </>
  );
});
