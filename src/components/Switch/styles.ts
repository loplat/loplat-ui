import styled from '@emotion/styled';
import {
  blue100,
  blue300,
  grayscale50,
  grayscale200,
  primary,
  spacing,
  grayscale500,
  white,
  grayscale700,
  bluescale400,
  bluescale50,
  grayscale300,
  bluescale200,
} from '../../core';
import { MarginSpacing, marginSpacingStyle } from '../../core/Spacing';
import type { Variant, SwitchProps } from './types';

type Set = {
  thumb: { background: string };
  track: { borderColor: string; background: string };
};
type ColorSet = Record<'checked' | 'notChecked' | 'disabled', Set>;
type StyledProps = Required<Pick<SwitchProps, 'variant' | 'checked'>>;

const colorSet: Record<Variant, ColorSet> = {
  outlined: {
    checked: {
      thumb: { background: primary },
      track: {
        borderColor: blue300,
        background: blue100,
      },
    },
    notChecked: {
      thumb: { background: grayscale700 },
      track: {
        borderColor: grayscale500,
        background: white,
      },
    },
    disabled: {
      thumb: { background: grayscale500 },
      track: {
        borderColor: grayscale200,
        background: grayscale50,
      },
    },
  },
  solid: {
    checked: {
      thumb: { background: white },
      track: {
        borderColor: primary,
        background: primary,
      },
    },
    notChecked: {
      thumb: { background: white },
      track: {
        borderColor: bluescale400,
        background: bluescale400,
      },
    },
    disabled: {
      thumb: { background: bluescale50 },
      track: {
        borderColor: grayscale200,
        background: grayscale200,
      },
    },
  },
};

export const Wrapper = styled.div<MarginSpacing>`
  ${marginSpacingStyle};
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  vertical-align: middle;
  height: 40px;
  width: 76px;
`;

export const ThumbWrapper = styled.span<Pick<StyledProps, 'variant'>>`
  display: flex;
  align-items: center;
  position: absolute;
  inset: 0;
  transition: transform 0.3s ease;
  input[type='checkbox'] {
    z-index: 2;
    position: absolute;
    inset: 0;
    opacity: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    &:checked ~ span {
      left: 50%;
      background-color: ${({ variant }) => colorSet[variant].checked.thumb.background};
    }
    &:not(:checked) ~ span {
      left: ${spacing(1)}px;
      background-color: ${({ variant }) => colorSet[variant].notChecked.thumb.background};
    }
    &:focus-visible {
      &:checked ~ span {
        border: ${spacing(1)}px solid ${blue300};
      }
      &:not(:checked) ~ span {
        border-color: ${({ variant }) => (variant === 'outlined' ? grayscale300 : bluescale200)};
      }
    }
    &:disabled {
      cursor: not-allowed;
      & ~ span {
        background-color: ${({ variant }) => colorSet[variant].disabled.thumb.background};
      }
    }
  }
`;

export const Thumb = styled.span`
  display: block;
  box-sizing: border-box;
  z-index: 1;
  position: absolute;
  inset: 0;
  top: ${spacing(1)}px;
  left: ${spacing(1)}px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: ${spacing(1)}px solid transparent;
  transition: left 0.3s ease;
`;

export const Track = styled.span<StyledProps>`
  transition: all 0.3s ease;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: 20px;
  position: absolute;
  border: 1px solid;
  ${({ variant, checked }) => `
    border-color: ${colorSet[variant][checked ? 'checked' : 'notChecked'].track.borderColor};
    background: ${colorSet[variant][checked ? 'checked' : 'notChecked'].track.background};
    .disabled + & {
      border-color: ${colorSet[variant].disabled.track.borderColor};
      background: ${colorSet[variant].disabled.track.background};
    }
  `};
`;
