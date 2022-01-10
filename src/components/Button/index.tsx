import React from 'react';
import styled from '@emotion/styled';
import {
  background100,
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
import { Desktop } from '../../core/MediaQuery';
import { MarginSpacing, marginSpacingProps, marginSpacingStyle, spacing } from '../../core/Spacing';

type Size = 'xs' | 'sm' | 'lg';
type Color = 'default' | 'primary1' | 'primary2' | 'danger1' | 'danger2' | 'solid' | 'white';
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
  lg: {
    padding: `${spacing(5.5)}px ${spacing(18)}px`,
  },
} as const;

export const ColorSet = {
  default: {
    background: {
      default: white,
      hover: blue100,
      act: blue500,
      disabled: background100,
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
      disabled: background100,
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
      disabled: background100,
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
      disabled: background100,
    },
    border: {
      default: blueScale200,
      hover: blueScale400,
      act: blueScale100,
      disabled: background100,
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
      disabled: background100,
    },
    border: {
      default: white,
      hover: blue100,
      act: blue300,
      disabled: background100,
    },
    text: {
      default: blue500,
      hover: blue500,
      act: white,
      disabled: grayScale500,
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
      {...SizeSet[props.size ?? 'sm']}
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
