import React from 'react';
import { css } from '@emotion/css';
// TODO: path alias 설정
import { BoxSpacing, BoxSpacingStyle } from '../../Spacing';

// TODO: color set 완성되면, color type의 유니온 타입으로 변경
type ColorSet = string;
type TextAlign = 'center' | 'left' | 'right' | 'justify' | 'inherit';
const FONT_SIZE = {
  '2xs': 0.625,
  xs: 0.75,
  sm: 0.875,
  base: 1,
  lg: 1.125,
  xl: 1.25,
  '2xl': 1.5,
  '3xl': 1.75,
  '4xl': 2,
  '5xl': 2.5,
  '6xl': 3,
  '7xl': 3.5,
  '8xl': 4,
} as const;
type FontSize = keyof typeof FONT_SIZE | number;
const FONT_WEIGHT = {
  extraBold: 800,
  bold: 700,
  regular: 400,
} as const;
type FontWeight = keyof typeof FONT_WEIGHT;

interface TypographyStyle extends BoxSpacing {
  size?: FontSize;
  color?: ColorSet;
  textAlign?: TextAlign;
  weight?: FontWeight;
  className?: string;
}

export interface TypographyProps extends TypographyStyle {
  children?: React.ReactNode;
}

export const TextElementStyle = (props: TypographyStyle): string => css`
  width: fit-content;
  font-size: ${`${typeof props.size === 'string' ? FONT_SIZE[props.size] : props.size ?? 1}rem`};
  font-weight: ${FONT_WEIGHT[props.weight ?? 'regular']};
  color: ${props.color ?? '#000000'};
  text-align: ${props.textAlign ?? ''};
  line-height: 1.5;
  letter-spacing: normal;
  ${BoxSpacingStyle(props)};
`;
