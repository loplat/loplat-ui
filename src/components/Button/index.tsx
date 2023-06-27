'use client';

import React, { ForwardedRef } from 'react';
import styled from '@emotion/styled';
import {
  grayscale800,
  blue100,
  blue500,
  blue600,
  red100,
  red400,
  grayscale200,
  grayscale500,
  white,
  blue300,
  red200,
  red300,
  bluescale700,
  bluescale600,
  bluescale800,
  background100,
  grayscale300,
  grayscale900,
  background300,
  transparent,
} from '../../core/colors';
import { MarginSpacing, marginSpacingProps, marginSpacingStyle, spacing } from '../../core/Spacing';
import { NotMobile } from '../../core/styles/mediaQuery';

type Size = 'xs' | 'sm' | 'md' | 'lg';
type Variant = 'primary1' | 'primary2' | 'danger1' | 'danger2' | 'solid' | 'ghost1' | 'ghost2' | 'white';
type FullWidth = { fullWidth?: boolean };
type Borderless = { borderless?: boolean };

export type CommonButtonProps = Partial<
  React.ButtonHTMLAttributes<HTMLButtonElement> & Borderless & MarginSpacing & { variant: Variant }
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
  (typeof SIZE_SET)[keyof typeof SIZE_SET] &
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
type ButtonColorSet = Record<Variant, ButtonPalettePerOption>;

export const COLOR_SET: ButtonColorSet = {
  primary1: {
    background: {
      default: blue500,
      hover: blue600,
      active: blue300,
      disabled: blue100,
    },
    border: {
      default: blue500,
      hover: blue600,
      active: blue300,
      disabled: blue100,
    },
    text: {
      default: white,
      hover: white,
      active: white,
      disabled: blue500,
    },
  },
  primary2: {
    background: {
      default: white,
      hover: blue100,
      active: blue500,
      disabled: background100,
    },
    border: {
      default: blue500,
      hover: blue500,
      active: blue500,
      disabled: grayscale200,
    },
    text: {
      default: blue500,
      hover: blue500,
      active: white,
      disabled: grayscale500,
    },
  },
  danger1: {
    background: {
      default: red300,
      hover: red400,
      active: red200,
      disabled: red100,
    },
    border: {
      default: red300,
      hover: red400,
      active: red200,
      disabled: red100,
    },
    text: {
      default: white,
      hover: white,
      active: white,
      disabled: red300,
    },
  },
  danger2: {
    background: {
      default: white,
      hover: red100,
      active: red300,
      disabled: background100,
    },
    border: {
      default: red300,
      hover: red300,
      active: red300,
      disabled: grayscale200,
    },
    text: {
      default: red300,
      hover: red300,
      active: white,
      disabled: grayscale500,
    },
  },
  solid: {
    background: {
      default: bluescale700,
      hover: bluescale600,
      active: bluescale800,
      disabled: background300,
    },
    border: {
      default: bluescale700,
      hover: bluescale600,
      active: bluescale800,
      disabled: background300,
    },
    text: {
      default: white,
      hover: white,
      active: white,
      disabled: grayscale500,
    },
  },
  ghost1: {
    background: {
      default: background100,
      hover: grayscale300,
      active: grayscale200,
      disabled: background100,
    },
    border: {
      default: background100,
      hover: grayscale300,
      active: grayscale200,
      disabled: background100,
    },
    text: {
      default: grayscale900,
      hover: grayscale900,
      active: grayscale900,
      disabled: grayscale500,
    },
  },
  ghost2: {
    background: {
      default: transparent,
      hover: blue100,
      active: transparent,
      disabled: background100,
    },
    border: {
      default: grayscale200,
      hover: blue500,
      active: grayscale200,
      disabled: grayscale200,
    },
    text: {
      default: grayscale800,
      hover: blue500,
      active: blue500,
      disabled: grayscale500,
    },
  },
  white: {
    background: {
      default: white,
      hover: blue100,
      active: white,
      disabled: background100,
    },
    border: {
      default: grayscale200,
      hover: blue500,
      active: grayscale200,
      disabled: grayscale200,
    },
    text: {
      default: grayscale800,
      hover: blue500,
      active: blue500,
      disabled: grayscale500,
    },
  },
};

export const BaseButton = styled.button<BaseButtonProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing(2)}px ${spacing(4)}px;
  ${marginSpacingStyle};
  cursor: pointer;

  border-width: 1px;
  border-style: solid;
  border-color: ${({ border, borderless }) => (borderless ? 'transparent' : border.default)};
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
    font-size: 1rem;
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
    border-color: ${({ border, borderless }) => (borderless ? 'transparent' : border.disabled)};
    background-color: ${({ background }) => background.disabled};
    svg g > path {
      fill: ${({ text }) => text.disabled};
    }
  }

  &:active:not(:disabled) {
    color: ${({ text }) => text.active};
    border-color: ${({ border, borderless }) => (borderless ? 'transparent' : border.active)};
    background-color: ${({ background }) => background.active};
    svg g > path {
      fill: ${({ text }) => text.active};
    }
  }

  &:focus-visible:not(:active) {
    color: ${({ text }) => text.hover};
    border-color: ${({ border, borderless }) => (borderless ? 'transparent' : border.hover)};
    background-color: ${({ background }) => background.hover};
    svg g > path {
      fill: ${({ text }) => text.hover};
    }
  }

  ${NotMobile} {
    padding: ${({ padding }) => padding};
    &:hover:not(:disabled, :active) {
      color: ${({ text }) => text.hover};
      border-color: ${({ border, borderless }) => (borderless ? 'transparent' : border.hover)};
      background-color: ${({ background }) => background.hover};
      svg g > path {
        fill: ${({ text }) => text.hover};
      }
    }
  }
`;

export const Button = React.forwardRef(
  (
    { variant = 'white', size, leftIcon, rightIcon, children, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ): JSX.Element => {
    return (
      <BaseButton
        {...COLOR_SET[variant]}
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
