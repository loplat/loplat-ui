import React from 'react';
import { blue500, blueScale300, danger300, success300, warning300, white } from '../../core/Palette';
import { css } from '@emotion/css';

type BadgeType = 'pill' | 'round';
type Color = 'primary' | 'danger' | 'success' | 'new' | 'light' | 'warning';
type variant = 'filled' | 'outlined';
type Size = 'normal' | 'small';

export interface BadgeProps {
  type?: BadgeType;
  color?: Color;
  text: string;
  variant?: variant;
  size?: Size;
  className?: string;
}

const ColorSet = {
  primary: blue500,
  danger: danger300,
  success: success300,
  new: danger300,
  light: blueScale300,
  warning: warning300,
} as const;

export const Badge = ({
  type = 'pill',
  color = 'primary',
  text,
  variant = 'filled',
  size = 'normal',
  className = '',
}: BadgeProps): React.ReactElement => {
  const [padding, fontSize] = size === 'small' ? ['1px 5px', '0.5rem'] : ['3px 11px', '0.75rem'];
  const [fontColor, backgroundColor] = variant === 'filled' ? [white, ColorSet[color]] : [ColorSet[color], white];
  return (
    <div
      className={`${css`
        width: fit-content;
        height: auto;
        max-height: 1.5rem;
        padding: ${padding};
        font-size: ${fontSize};
        box-sizing: border-box;
        border-radius: ${type === 'pill' ? '12px' : '4px'};
        border: 1px solid ${ColorSet[color]};
        color: ${fontColor};
        background-color: ${backgroundColor};
      `} ${className}`}
    >
      {text}
    </div>
  );
};
