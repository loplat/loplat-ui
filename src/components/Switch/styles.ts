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

export const ThumbWrapper = styled.span<Pick<StyledProps, 'variant'>>(({ variant }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  inset: 0,
  transition: 'transform 0.3s ease',
  'input[type="checkbox"]': {
    cursor: 'pointer',
    zIndex: 2,
    position: 'absolute',
    inset: 0,
    opacity: 0,
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',

    '&:checked ~ span': {
      left: `50%`,
      backgroundColor: colorSet[variant].checked.thumb.background,
    },
    '&:not(:checked) ~ span': {
      left: `${spacing(1)}px`,
      backgroundColor: colorSet[variant].notChecked.thumb.background,
    },
    '&:focus-visible': {
      '&:checked ~ span': { border: `${spacing(1)}px solid ${blue300}` },
      '&:not(:checked) ~ span': {
        border: `${spacing(1)}px solid`,
        borderColor: variant === 'outlined' ? grayscale300 : bluescale200,
      },
    },
    '&:disabled': {
      cursor: 'not-allowed',
      '& ~ span': {
        backgroundColor: colorSet[variant].disabled.thumb.background,
      },
    },
  },
}));

export const Thumb = styled.span({
  display: 'block',
  boxSizing: 'border-box',
  pointerEvents: 'none',
  cursor: 'pointer',
  position: 'absolute',
  zIndex: 2,
  inset: 0,
  top: `${spacing(1)}px`,
  left: `${spacing(1)}px`,
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  transition: 'left 0.3s ease',
});

export const Track = styled.span<StyledProps>(({ variant, checked }) => ({
  transition: 'all 0.3s ease',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  zIndex: 1,
  borderRadius: '20px',
  position: 'absolute',
  border: `1px solid`,
  borderColor: `${colorSet[variant][checked ? 'checked' : 'notChecked'].track.borderColor}`,
  backgroundColor: colorSet[variant][checked ? 'checked' : 'notChecked'].track.background,
  '.disabled + &': {
    backgroundColor: colorSet[variant].disabled.track.background,
    borderColor: colorSet[variant].disabled.track.borderColor,
  },
}));
