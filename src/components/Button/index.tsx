import React from 'react';
import styled from '@emotion/styled';
import {
  background,
  black300,
  blue100,
  blue200,
  blue300,
  blue500,
  blue600,
  blueScale100,
  blueScale200,
  blueScale400,
  danger100,
  danger300,
  danger400,
  grayScale200,
  grayScale500,
  white,
} from '../../core/Palette';

export type Size = 'sm' | 'md' | 'lg';
export type Color = 'default' | 'primary1' | 'primary2' | 'danger1' | 'danger2' | 'solid' | 'white';
export interface ButtonProps {
  size?: Size;
  fullWidth?: boolean;
  color?: Color;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactNode;
}

type BaseButtonProps = typeof SizeSet[keyof typeof SizeSet] & typeof ColorSet[keyof typeof ColorSet];

const SizeSet = {
  fullWidth: {
    minWidth: '100%',
    height: 'auto',
    padding: '1rem',
  },
  sm: {
    minWidth: '5rem',
    height: '2.38rem',
    padding: '0.5rem',
  },
  md: {
    minWidth: '9rem',
    height: '3.38rem',
    padding: '1.13rem 2.13rem',
  },
  lg: {
    minWidth: '12rem',
    height: '4.38rem',
    padding: '1.5rem 3.63rem',
  },
} as const;

export const ColorSet = {
  default: {
    background: {
      default: white,
      hover: blue100,
      act: blue500,
      disabled: background,
    },
    border: {
      default: grayScale200,
      hover: blue500,
      act: blue500,
      disabled: grayScale200,
    },
    text: {
      default: black300,
      hover: black300,
      act: white,
      disabled: grayScale500,
    },
  },
  primary1: {
    background: {
      default: blue500,
      hover: blue600,
      act: blue500,
      disabled: blue100,
    },
    border: {
      default: blue500,
      hover: blue600,
      act: blue500,
      disabled: blue100,
    },
    text: {
      default: white,
      hover: white,
      act: white,
      disabled: blue200,
    },
  },
  primary2: {
    background: {
      default: white,
      hover: blue100,
      act: blue500,
      disabled: background,
    },
    border: {
      default: blue500,
      hover: blue500,
      act: blue500,
      disabled: grayScale200,
    },
    text: {
      default: blue500,
      hover: blue500,
      act: white,
      disabled: grayScale500,
    },
  },
  danger1: {
    background: {
      default: danger300,
      hover: danger400,
      act: danger300,
      disabled: danger100,
    },
    border: {
      default: danger300,
      hover: danger400,
      act: danger300,
      disabled: danger100,
    },
    text: {
      default: white,
      hover: white,
      act: white,
      disabled: `rgba(216, 58, 94, 0.4)`,
    },
  },
  danger2: {
    background: {
      default: white,
      hover: danger100,
      act: danger300,
      disabled: background,
    },
    border: {
      default: danger300,
      hover: danger300,
      act: danger300,
      disabled: grayScale200,
    },
    text: {
      default: danger300,
      hover: danger300,
      act: white,
      disabled: grayScale500,
    },
  },
  solid: {
    background: {
      default: blueScale200,
      hover: blueScale400,
      act: blueScale100,
      disabled: background,
    },
    border: {
      default: blueScale200,
      hover: blueScale400,
      act: blueScale100,
      disabled: background,
    },
    text: {
      default: black300,
      hover: black300,
      act: black300,
      disabled: grayScale500,
    },
  },
  white: {
    background: {
      default: white,
      hover: blue100,
      act: blue300,
      disabled: background,
    },
    border: {
      default: white,
      hover: blue100,
      act: blue300,
      disabled: background,
    },
    text: {
      default: blue500,
      hover: blue500,
      act: white,
      disabled: grayScale500,
    },
  },
} as const;

const BaseButton = styled.button<BaseButtonProps>`
  width: auto;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: 4px;
  line-height: 1.5;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    &:first-of-type {
      margin-right: 0.25rem;
    }
    &:last-of-type {
      margin-left: 0.25rem;
    }
  }

  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  font-size: 1.13rem;
  color: ${({ text }) => text.default};
  padding: ${({ padding }) => padding};
  background-color: ${({ background }) => background.default};
  border: 1px solid ${({ border }) => border.default};

  &:disabled {
    color: ${({ text }) => text.disabled};
    svg path {
      fill: ${({ text }) => text.disabled};
    }
    background-color: ${({ background }) => background.disabled};
    border-color: ${({ border }) => border.disabled};
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    color: ${({ text }) => text.hover};
    svg path {
      fill: ${({ text }) => text.hover};
    }
    background-color: ${({ background }) => background.hover};
    border-color: ${({ border }) => border.hover};
  }
  &:active:not(:disabled) {
    color: ${({ text }) => text.act};
    svg path {
      fill: ${({ text }) => text.act};
    }
    background-color: ${({ background }) => background.act};
    border-color: ${({ border }) => border.act};
  }
`;

export const Button = ({ disabled = false, ...props }: ButtonProps): React.ReactElement => {
  return (
    <BaseButton
      disabled={disabled}
      {...ColorSet[props.color ?? 'default']}
      {...SizeSet[props.fullWidth ? 'fullWidth' : props.size ?? 'sm']}
      className={props.className ?? ''}
    >
      <div>{props.leftIcon}</div>
      <div>{props.children}</div>
      <div>{props.rightIcon}</div>
    </BaseButton>
  );
};
