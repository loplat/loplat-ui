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

export type FontFamilySet = 'NanumSquareRound' | 'Noto Sans KR' | 'Montserrat';
export type TextAlign = 'left' | 'right' | 'center';
export interface TypographyStyle {
  size?: number;
  color?: ColorSet;
  textAlign?: TextAlign;
  weight?: FontWeightSet;
  fontFamily?: FontFamilySet;
  className?: string;
}

export interface TypographyProps extends TypographyStyle {
  children?: React.ReactNode;
}

const TextElementStyle = (props: TypographyStyle): string => css`
  font-size: ${`${props.size}px` || '16px'};
  font-weight: ${props.weight ? FontWeight[props.weight] : 400};
  font-family: ${props.fontFamily || "'NanumSquareRound', 'Noto Sans KR', 'Montserrat', sans-serif"};
  color: ${props.color || '#000000'};
  line-height: 1.14;
  letter-spacing: normal;
  text-align: ${props.textAlign || 'left'};
`;

export default TextElementStyle;
