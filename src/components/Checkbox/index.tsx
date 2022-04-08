import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { blue500, grayscale800, grayscale200, grayscale500, grayscale100, grayscale300 } from '../../core/colors';
import { primary } from '../../core/styles/palette';
import { MarginSpacing, marginSpacingProps, marginSpacingStyle } from '../../core/Spacing';

type BaseLabel = {
  /** `label`의 폰트굵기를 굵게 만듭니다.*/
  boldLabel?: boolean;
  disabled?: boolean;
  /** 체크 여부와 중간값을 할당할 수 있습니다.*/
  checked: boolean | 'checked' | 'unchecked' | 'intermediate';
};

export type CheckboxProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** `label`과 `input`을 연동하는 속성입니다. form을 이용해 submit될 때, key값입니다.*/
  name: string;
  /** 체크박스와 연동된 `label`태그입니다.*/
  label: string;
} & BaseLabel &
  MarginSpacing &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'checked'>;

export const Checkbox = ({
  label,
  name,
  checked,
  onChange,
  disabled,
  className,
  id,
  ...props
}: CheckboxProps): JSX.Element => {
  const isChecked: boolean = typeof checked === 'string' ? checked !== 'unchecked' : checked;

  return (
    <Label
      checked={checked}
      disabled={disabled}
      className={className}
      id={id}
      {...marginSpacingProps(props)}
      data-testid="loplat-ui__label"
    >
      <input type="checkbox" name={name} checked={isChecked} onChange={onChange} disabled={disabled} {...props} />
      <Checkmark />
      {label}
    </Label>
  );
};

const Label = styled.label<BaseLabel & MarginSpacing>`
  ${marginSpacingStyle};
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: ${({ boldLabel }) => (boldLabel ? 600 : 400)};
  color: ${({ disabled }) => (disabled ? grayscale500 : grayscale800)};
  cursor: pointer;

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;

    &:checked ~ span {
      border-color: ${blue500};

      &::after {
        ${(props) =>
          props.checked === 'intermediate'
            ? css`
                width: 0.7rem;
                height: 0;
                transform: translate(-50%, -50%);
                border-bottom: 2px solid ${blue500};
                box-sizing: border-box;
              `
            : css`
                width: 0.7rem;
                height: 0.35rem;
                transform: translate(-50%, -80%) rotate(-45deg);
                border: 2px solid ${blue500};
                border-top: 0;
                border-right: 0;
                box-sizing: border-box;
              `};
      }
    }
    &:disabled ~ span {
      border-color: ${grayscale200};
      background-color: ${grayscale100};
      &::after {
        border-color: ${grayscale500};
      }
    }
    &:hover:not(:checked) ~ span {
      border-color: ${grayscale300};
    }
    &:focus-visible ~ span {
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
