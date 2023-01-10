import React, { ForwardedRef } from 'react';
import styled from '@emotion/styled';
import {
  grayscale50,
  grayscale800,
  blue100,
  blue200,
  blue500,
  blue600,
  bluescale100,
  bluescale200,
  bluescale400,
  red100,
  red400,
  grayscale200,
  grayscale500,
  transparent,
  white,
} from '../../core/colors';
import { primary, danger } from '../../core/styles/palette';
import { MarginSpacing, marginSpacingProps, marginSpacingStyle, spacing } from '../../core/Spacing';
import { Mobile, NotMobile } from '../../core/styles/mediaQuery';

type Size = 'xs' | 'sm' | 'md' | 'lg';
type Color = 'default' | 'primary1' | 'primary2' | 'danger1' | 'danger2' | 'solid' | 'ghost';
type FullWidth = { fullWidth?: boolean };
type Borderless = { borderless?: boolean };

export type CommonButtonProps = Partial<
  React.ButtonHTMLAttributes<HTMLButtonElement> & Borderless & MarginSpacing & { color: Color }
>;
export type ButtonProps = CommonButtonProps &
  FullWidth & {
    size?: Size;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    children?: React.ReactNode;
  };
type BaseButtonProps = CommonButtonProps &
  FullWidth &
  typeof SIZE_SET[keyof typeof SIZE_SET] &
  ButtonColorSet[keyof ButtonColorSet];

export const SIZE_SET = {
  onlyIcon: {
    padding: `${spacing(2)}px`,
  },
  xs: {
    padding: `${spacing(2)}px ${spacing(4)}px`,
  },
  sm: {
    padding: `${spacing(4)}px ${spacing(4)}px`,
  },
  md: {
    padding: `${spacing(4)}px ${spacing(12)}px`,
  },
  lg: {
    padding: `${spacing(6)}px ${spacing(18)}px`,
  },
} as const;

type ButtonPalette = {
  default: string;
  hover: string;
  active: string;
  disabled: string;
};
type ButtonOptions = 'background' | 'border' | 'text';
type ButtonPalettePerOption = Record<ButtonOptions, ButtonPalette>;
type ButtonColorSet = Record<Color, ButtonPalettePerOption>;

export const COLOR_SET: ButtonColorSet = {
  default: {
    background: {
      default: white,
      hover: blue100,
      active: primary,
      disabled: grayscale50,
    },
    border: {
      default: grayscale200,
      hover: primary,
      active: primary,
      disabled: grayscale200,
    },
    text: {
      default: grayscale800,
      hover: grayscale800,
      active: white,
      disabled: grayscale500,
    },
  },
  primary1: {
    background: {
      default: primary,
      hover: blue600,
      active: primary,
      disabled: blue100,
    },
    border: {
      default: primary,
      hover: blue600,
      active: primary,
      disabled: blue100,
    },
    text: {
      default: white,
      hover: white,
      active: white,
      disabled: blue200,
    },
  },
  primary2: {
    background: {
      default: white,
      hover: blue100,
      active: primary,
      disabled: grayscale50,
    },
    border: {
      default: primary,
      hover: primary,
      active: primary,
      disabled: grayscale200,
    },
    text: {
      default: primary,
      hover: primary,
      active: white,
      disabled: grayscale500,
    },
  },
  danger1: {
    background: {
      default: danger,
      hover: red400,
      active: danger,
      disabled: red100,
    },
    border: {
      default: danger,
      hover: red400,
      active: danger,
      disabled: red100,
    },
    text: {
      default: white,
      hover: white,
      active: white,
      disabled: `rgba(216, 58, 94, 0.4)`,
    },
  },
  danger2: {
    background: {
      default: white,
      hover: red100,
      active: danger,
      disabled: grayscale50,
    },
    border: {
      default: danger,
      hover: danger,
      active: danger,
      disabled: grayscale200,
    },
    text: {
      default: danger,
      hover: danger,
      active: white,
      disabled: grayscale500,
    },
  },
  solid: {
    background: {
      default: bluescale200,
      hover: bluescale400,
      active: bluescale100,
      disabled: grayscale50,
    },
    border: {
      default: bluescale200,
      hover: bluescale400,
      active: bluescale100,
      disabled: grayscale50,
    },
    text: {
      default: grayscale800,
      hover: grayscale800,
      active: grayscale800,
      disabled: grayscale500,
    },
  },
  ghost: {
    background: {
      default: transparent,
      hover: blue100,
      active: blue500,
      disabled: transparent,
    },
    border: {
      default: transparent,
      hover: blue100,
      active: blue500,
      disabled: transparent,
    },
    text: {
      default: grayscale800,
      hover: blue500,
      active: white,
      disabled: grayscale500,
    },
  },
};

export const BaseButton = styled.button<BaseButtonProps>`
  width: ${({ fullWidth }) => fullWidth && '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => padding};
  ${marginSpacingStyle};
  cursor: pointer;

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
    line-height: 1;
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

  -webkit-tap-highlight-color: transparent;

  &:disabled {
    cursor: not-allowed;
    color: ${({ text }) => text.disabled};
    border-color: ${({ border }) => border.disabled};
    background-color: ${({ background }) => background.disabled};
    svg g > path {
      fill: ${({ text }) => text.disabled};
    }
  }

  &:focus-visible:not(:active) {
    color: ${({ text }) => text.hover};
    border-color: ${({ border }) => border.hover};
    background-color: ${({ background }) => background.hover};
    svg g > path {
      fill: ${({ text }) => text.hover};
    }
  }

  ${NotMobile} {
    &:active:not(:disabled) {
      color: ${({ text }) => text.active};
      border-color: ${({ border }) => border.active};
      background-color: ${({ background }) => background.active};
      svg g > path {
        fill: ${({ text }) => text.active};
      }
    }
    &:hover:not(:disabled, :active) {
      color: ${({ text }) => text.hover};
      border-color: ${({ border }) => border.hover};
      background-color: ${({ background }) => background.hover};
      svg g > path {
        fill: ${({ text }) => text.hover};
      }
    }
  }

  ${({ borderless }) => (borderless ? `border-color: transparent` : ``)};
`;

export const Button = React.forwardRef(
  (
    { color, size, leftIcon, rightIcon, children, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ): JSX.Element => {
    return (
      <BaseButton
        {...COLOR_SET[color ?? 'default']}
        {...SIZE_SET[size ?? 'md']}
        {...marginSpacingProps(props)}
        {...props}
        ref={ref}
      >
        {leftIcon && <div className="leftIcon">{leftIcon}</div>}
        <span>{children}</span>
        {rightIcon && <div className="rightIcon">{rightIcon}</div>}
      </BaseButton>
    );
  },
);
