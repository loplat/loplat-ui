import { css } from '@emotion/react';
import { blue100, blue600 } from '../../colors';

// Underline
export interface UnderlineProps {
  bottom?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  color?: string;
}

export const underline = ({
  bottom = '-8px',
  width = '10px',
  height = '3px',
  borderRadius = '2px',
  color = blue600,
}: UnderlineProps = {}) => css`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: ${width};
    height: ${height};
    bottom: ${bottom};
    left: 50%;
    transform: translateX(-50%);

    background-color: ${color};
    border-radius: ${borderRadius};
  }
`;

// Highlight
export interface HighlightProps {
  width?: string;
  positionX?: string;
  color?: string;
}

export const highlight = ({ width = '100%', positionX = '50%', color = blue100 }: HighlightProps = {}) => css`
  background-origin: padding-box;
  background-size: ${width} 45%;
  background-position: ${positionX} 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient(to right, ${color}, ${color});
`;
