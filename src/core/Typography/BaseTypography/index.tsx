import React from 'react';
import { css } from '@emotion/css';
// TODO: path alias 설정
import { BoxSpacing, BoxSpacingStyle } from '../../Spacing';

export const FontWeight = {
  extraBold: 800,
  bold: 700,
  regular: 400,
} as const;
export type FontWeightSet = keyof typeof FontWeight;
export type TextAlign = 'center' | 'inherit' | 'justify' | 'left' | 'right';
// TODO: color set 완성되면, color type의 유니온 타입으로 변경
export type ColorSet = '#000000' | string;

export interface TypographyStyle extends BoxSpacing {
  size?: number;
  color?: ColorSet;
  textAlign?: TextAlign;
  weight?: FontWeightSet;
  className?: string;
}

export interface TypographyProps extends TypographyStyle {
  children?: React.ReactNode;
}

export const TextElementStyle = (props: TypographyStyle): string => css`
  width: fit-content;
  font-size: ${`${props.size}rem` || '1rem'};
  font-weight: ${props.weight ? FontWeight[props.weight] : 400};
  color: ${props.color || '#000000'};
  line-height: 1.5;
  letter-spacing: normal;
  text-align: ${props.textAlign || ''};
  ${BoxSpacingStyle(props)};
`;
