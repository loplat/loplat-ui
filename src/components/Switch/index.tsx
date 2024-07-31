'use client';

import React, { ForwardedRef } from 'react';
import type { SwitchProps } from './types';
import { Wrapper, ThumbWrapper, Thumb, Track } from './styles';
import { MarginSpacing, marginSpacingProps } from '../../core/Spacing';

export type Props = SwitchProps & MarginSpacing;
export const Switch = React.forwardRef(
  (
    { variant = 'solid', checked, onChange, height = 40, width = 76, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <Wrapper {...marginSpacingProps(props)} height={height} width={width}>
        <ThumbWrapper variant={variant} width={width} height={height} className={props.disabled ? 'disabled' : ''}>
          <input ref={ref} type="checkbox" {...props} checked={checked} onChange={onChange} />
          <Thumb onClick={(e) => e.stopPropagation()} height={height} width={width} />
        </ThumbWrapper>
        <Track variant={variant} checked={checked} />
      </Wrapper>
    );
  },
);
