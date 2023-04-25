import React from 'react';
import styled from '@emotion/styled';
import {
  background300,
  black,
  bluescale400,
  bluescale500,
  grayscale700,
  teal,
  transparent,
  white,
} from '../../core/colors';
import { primary, danger } from '../../core/styles/palette';
import { MarginSpacing, marginSpacingProps, marginSpacingStyle } from '../../core/Spacing';

type Variant =
  | 'primary1'
  | 'primary2'
  | 'success1'
  | 'success2'
  | 'danger1'
  | 'danger2'
  | 'light1'
  | 'light2'
  | 'done1'
  | 'done2'
  | 'selected';
type Size = 'small' | 'large';

export type BadgeBaseProps = {
  variant?: Variant;
  size?: Size;
};

export type BadgeProps = BadgeBaseProps & MarginSpacing & React.HTMLAttributes<HTMLDivElement>;

export const Badge = ({ size = 'small', variant = 'primary1', children, ...props }: BadgeProps): React.ReactElement => {
  return (
    <BadgeWrapper variant={variant} size={size} {...marginSpacingProps(props)} {...props}>
      {children}
    </BadgeWrapper>
  );
};

const BADGE_STYLE: Record<Size, { padding: string; minWidth: string }> = {
  small: { padding: '4px 8px', minWidth: '68px' },
  large: { padding: '8px', minWidth: '104px' },
};
type StylingProps = 'background' | 'border' | 'text';
const BADGE_PALETTE: Record<Variant, Record<StylingProps, string>> = {
  primary1: { background: primary, border: primary, text: white },
  primary2: { background: transparent, border: primary, text: primary },
  success1: { background: teal, border: teal, text: white },
  success2: { background: transparent, border: teal, text: teal },
  danger1: { background: danger, border: danger, text: white },
  danger2: { background: transparent, border: danger, text: danger },
  light1: { background: background300, border: background300, text: grayscale700 },
  light2: { background: transparent, border: transparent, text: bluescale500 },
  done1: { background: bluescale400, border: bluescale400, text: white },
  done2: { background: transparent, border: bluescale500, text: bluescale500 },
  selected: { background: white, border: primary, text: black },
};

const BadgeWrapper = styled.div<Required<BadgeBaseProps> & MarginSpacing>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  line-height: 1.125rem;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid transparent;
  width: max-content;
  ${({ size }) => `padding: ${BADGE_STYLE[size].padding}; min-width: ${BADGE_STYLE[size].minWidth}`};
  ${({ variant }) =>
    `border-color: ${BADGE_PALETTE[variant].border}; background: ${BADGE_PALETTE[variant].background}; color: ${BADGE_PALETTE[variant].text}`}
  ${marginSpacingStyle};

  svg g path {
    fill: ${({ variant }) => BADGE_PALETTE[variant].text};
  }
`;
