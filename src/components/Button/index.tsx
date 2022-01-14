import React from 'react';
import styled from '@emotion/styled';
import {
  grayscale50,
  grayscale800,
  blue100,
  blue200,
  blue300,
  blue600,
  bluescale100,
  bluescale200,
  bluescale400,
  red100,
  red400,
  grayscale200,
  grayscale500,
  white,
} from '../../core/colors';
import { primary, danger } from '../../core/styles/palette';
import { Desktop } from '../../core/MediaQuery';
import { MarginSpacing, marginSpacingProps, marginSpacingStyle, spacing } from '../../core/Spacing';

type Size = 'xs' | 'sm' | 'md' | 'lg';
type Color = 'default' | 'primary1' | 'primary2' | 'danger1' | 'danger2' | 'solid' | 'ghost';
type FullWidth = { fullWidth?: boolean };
export type DefaultButtonProps = {
  color?: Color;
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};
export type ButtonProps = DefaultButtonProps &
  MarginSpacing &
  FullWidth & {
    size?: Size;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    children?: React.ReactNode;
  };

type BaseButtonProps = MarginSpacing &
  FullWidth &
  typeof SizeSet[keyof typeof SizeSet] &
  typeof ColorSet[keyof typeof ColorSet];

export const SizeSet = {
  onlyIcon: {
    padding: `${spacing(2)}px`,
  },
  xs: {
    padding: `${spacing(1.5)}px ${spacing(4)}px`,
  },
  sm: {
    padding: `${spacing(3.5)}px ${spacing(4)}px`,
  },
  md: {
    padding: `${spacing(3.5)}px ${spacing(12)}px`,
  },
  lg: {
    padding: `${spacing(5.5)}px ${spacing(18)}px`,
  },
} as const;

export const ColorSet = {
  default: {
    background: {
      default: white,
      hover: blue100,
      act: primary,
      disabled: grayscale50,
    },
    border: {
      default: grayscale200,
      hover: primary,
      act: primary,
      disabled: grayscale200,
    },
    text: {
      default: grayscale800,
      hover: grayscale800,
      act: white,
      disabled: grayscale500,
    },
  },
  primary1: {
    background: {
      default: primary,
      hover: blue600,
      act: primary,
      disabled: blue100,
    },
    border: {
      default: primary,
      hover: blue600,
      act: primary,
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
      act: primary,
      disabled: grayscale50,
    },
    border: {
      default: primary,
      hover: primary,
      act: primary,
      disabled: grayscale200,
    },
    text: {
      default: primary,
      hover: primary,
      act: white,
      disabled: grayscale500,
    },
  },
  danger1: {
    background: {
      default: danger,
      hover: red400,
      act: danger,
      disabled: red100,
    },
    border: {
      default: danger,
      hover: red400,
      act: danger,
      disabled: red100,
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
      hover: red100,
      act: danger,
      disabled: grayscale50,
    },
    border: {
      default: danger,
      hover: danger,
      act: danger,
      disabled: grayscale200,
    },
    text: {
      default: danger,
      hover: danger,
      act: white,
      disabled: grayscale500,
    },
  },
  solid: {
    background: {
      default: bluescale200,
      hover: bluescale400,
      act: bluescale100,
      disabled: grayscale50,
    },
    border: {
      default: bluescale200,
      hover: bluescale400,
      act: bluescale100,
      disabled: grayscale50,
    },
    text: {
      default: grayscale800,
      hover: grayscale800,
      act: grayscale800,
      disabled: grayscale500,
    },
  },
  ghost: {
    background: {
      default: white,
      hover: blue100,
      act: blue300,
      disabled: grayscale50,
    },
    border: {
      default: white,
      hover: blue100,
      act: blue300,
      disabled: grayscale50,
    },
    text: {
      default: grayscale800,
      hover: grayscale800,
      act: white,
      disabled: grayscale500,
    },
  },
} as const;

export const BaseButton = styled.button<BaseButtonProps>`
  width: ${({ fullWidth }) => fullWidth && '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => padding};
  ${marginSpacingStyle};

  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ border }) => border.default};
  border-radius: 4px;

  color: ${({ text }) => text.default};
  background-color: ${({ background }) => background.default};
  transition-property: color, background-color, border-color;
  transition-duration: 0.2s;
  transition-timing-function: ease;

  svg g > path {
    fill: ${({ text }) => text.default};
    transition: fill 0.2s ease;
  }

  span {
    font-size: 1.125rem;
    margin-top: 3px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    &.leftIcon {
      margin-right: ${spacing(1)}px;
    }
    &.rightIcon {
      margin-left: ${spacing(1)}px;
    }
  }

  &:disabled {
    color: ${({ text }) => text.disabled};
    svg g > path {
      fill: ${({ text }) => text.disabled};
    }
    background-color: ${({ background }) => background.disabled};
    border-color: ${({ border }) => border.disabled};
    cursor: not-allowed;
  }
  ${Desktop} {
    cursor: pointer;
    &:hover:not(:disabled) {
      color: ${({ text }) => text.hover};
      svg g > path {
        fill: ${({ text }) => text.hover};
      }
      background-color: ${({ background }) => background.hover};
      border-color: ${({ border }) => border.hover};
    }
  }
  &:active:not(:disabled) {
    color: ${({ text }) => text.act};
    svg g > path {
      fill: ${({ text }) => text.act};
    }
    background-color: ${({ background }) => background.act};
    border-color: ${({ border }) => border.act};
  }
`;

export const Button = ({ disabled = false, ...props }: ButtonProps): JSX.Element => {
  return (
    <BaseButton
      disabled={disabled}
      fullWidth={props.fullWidth}
      {...ColorSet[props.color ?? 'default']}
      {...SizeSet[props.size ?? 'md']}
      {...marginSpacingProps(props)}
      className={props.className ?? ''}
      onClick={props.onClick}
    >
      {props.leftIcon && <div className="leftIcon">{props.leftIcon}</div>}
      <span>{props.children}</span>
      {props.rightIcon && <div className="rightIcon">{props.rightIcon}</div>}
    </BaseButton>
  );
};
