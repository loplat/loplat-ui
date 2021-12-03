import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/serialize';

const STANDARD = 4;
/**
 * input/output 예시
 * 1. spacing(1) === 4px
 * 2. spacing(2.5) === 10px
 * 3. spacing(1.75) === 8px (4 * 1.75 = 7이지만 홀수 픽셀을 허용하지 않고 가장 가까운 짝수로 반올림)
 * 4. spacing(1.45) === 6px (4 * 1.45 = 5.8이지만 홀수 픽셀을 허용하지 않고 가장 가까운 짝수로 반올림)
 */
export const spacing = (operand: number): number => {
  if (Number.isInteger(operand * 2)) {
    // 0.5의 배수일 때
    return STANDARD * operand;
  } else {
    // 0.5의 배수가 아닌 소수일 때
    const integerPart = Math.floor(operand);
    const fractionalPart = operand - integerPart;
    const operandRoundedByOneHalf =
      fractionalPart < 0.75 && fractionalPart > 0.25 ? integerPart + 0.5 : Math.round(operand);
    return STANDARD * operandRoundedByOneHalf;
  }
};

// Margin
const marginSpacingOptions = ['mt', 'mb', 'ml', 'mr', 'my', 'mx'] as const;
export type MarginSpacing = {
  [key in typeof marginSpacingOptions[number]]?: number;
};
export const MarginSpacingProps = (props: MarginSpacing): MarginSpacing =>
  marginSpacingOptions.reduce(
    (prev, curr) => ({
      ...prev,
      [curr]: props[curr],
    }),
    {},
  );
export const MarginSpacingStyle = (props: MarginSpacing): SerializedStyles => css`
  margin-top: ${spacing((props.mt || props.my) ?? 0)}px;
  margin-bottom: ${spacing((props.mb || props.my) ?? 0)}px;
  margin-left: ${spacing((props.ml || props.mx) ?? 0)}px;
  margin-right: ${spacing((props.mr || props.mx) ?? 0)}px;
`;

// Padding
const paddingSpacingOptions = ['pt', 'pb', 'pl', 'pr', 'py', 'px'] as const;
export type PaddingSpacing = {
  [key in typeof paddingSpacingOptions[number]]?: number;
};
export const PaddingSpacingProps = (props: PaddingSpacing): PaddingSpacing =>
  paddingSpacingOptions.reduce(
    (prev, curr) => ({
      ...prev,
      [curr]: props[curr],
    }),
    {},
  );
export const PaddingSpacingStyle = (props: PaddingSpacing): SerializedStyles => css`
  padding-top: ${spacing((props.pt || props.py) ?? 0)}px;
  padding-bottom: ${spacing((props.pb || props.py) ?? 0)}px;
  padding-left: ${spacing((props.pl || props.px) ?? 0)}px;
  padding-right: ${spacing((props.pr || props.px) ?? 0)}px;
`;

// Box(Margin + Padding)
export type BoxSpacing = MarginSpacing & PaddingSpacing;
export const BoxSpacingProps = (props: BoxSpacing): BoxSpacing => ({
  ...MarginSpacingProps(props),
  ...PaddingSpacingProps(props),
});
export const BoxSpacingStyle = (props: BoxSpacing): SerializedStyles => css`
  ${MarginSpacingStyle(props)};
  ${PaddingSpacingStyle(props)};
`;
