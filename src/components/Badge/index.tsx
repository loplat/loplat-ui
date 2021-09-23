import React from 'react';
import { blue500, blueScale300, danger300, success300, warning300, white } from '../../core/Palette';
import { css } from '@emotion/css';

type BadgeType = 'pill' | 'round';
type Color = 'primary' | 'danger' | 'success' | 'new' | 'light' | 'warning';
type variant = 'filled' | 'outlined';
export interface BadgeProps {
  type?: BadgeType;
  color?: Color;
  text: string;
  variant?: variant;
}

const ColorSet = {
  primary: blue500,
  danger: danger300,
  success: success300,
  new: danger300,
  light: blueScale300,
  warning: warning300,
} as const;
const Badge = ({ type = 'pill', color = 'primary', text, variant = 'filled' }: BadgeProps): React.ReactElement => {
  const [padding, fontSize] = color === 'new' ? ['1px 5px', '8px'] : ['3px 11px', '12px'];
  const [fontColor, backgroundColor] = variant === 'filled' ? [white, ColorSet[color]] : [ColorSet[color], white];
  return (
    <div
      className={css`
        width: fit-content;
        height: auto;
        max-height: 24px;
        padding: ${padding};
        font-size: ${fontSize};
        box-sizing: border-box;
        border-radius: ${type === 'pill' ? '12px' : '4px'};
        border: 1px solid ${ColorSet[color]};
        color: ${fontColor};
        background-color: ${backgroundColor};
      `}
    >
      {text}
    </div>
  );
};

export default Badge;
