import React from 'react';
import { white } from '../../core/colors';
import { primary, danger, warning, success, primaryLight } from '../../core/styles/palette';
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
  primary,
  light: primaryLight,
  danger,
  success,
  new: danger,
  warning,
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
