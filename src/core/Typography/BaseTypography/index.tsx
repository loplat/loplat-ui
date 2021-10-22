import React from 'react';
import { css } from '@emotion/css';

// TODO: color set 완성되면, color type의 유니온 타입으로 변경
export type ColorSet = '#000000' | string;
export type FontWeightSet = 'extraBold' | 'bold' | 'regular';
export const FontWeight = {
  extraBold: 800,
  bold: 700,
  regular: 400,
};

export type TextAlign = 'center' | 'inherit' | 'justify' | 'left' | 'right';
export interface TypographyStyle {
  size?: number;
  color?: ColorSet;
  textAlign?: TextAlign;
  weight?: FontWeightSet;
  className?: string;
}

export interface TypographyProps extends TypographyStyle {
  children?: React.ReactNode;
}

const TextElementStyle = (props: TypographyStyle): string => css`
  width: fit-content;
  font-size: ${`${props.size}rem` || '1rem'};
  font-weight: ${props.weight ? FontWeight[props.weight] : 400};
  color: ${props.color || '#000000'};
  line-height: 1.5;
  letter-spacing: normal;
  text-align: ${props.textAlign || ''};
`;

export default TextElementStyle;
