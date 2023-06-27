'use client';

import React, { ForwardedRef } from 'react';
import type { SwitchProps } from './types';
import { Wrapper, ThumbWrapper, Thumb, Track } from './styles';
import { MarginSpacing, marginSpacingProps } from '../../core/Spacing';

export type Props = SwitchProps & MarginSpacing;
export const Switch = React.forwardRef(
  ({ variant = 'solid', checked, onChange, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Wrapper {...marginSpacingProps(props)}>
        <ThumbWrapper variant={variant} className={props.disabled ? 'disabled' : ''}>
          <input ref={ref} type="checkbox" {...props} checked={checked} onChange={onChange} />
          <Thumb onClick={(e) => e.stopPropagation()} />
        </ThumbWrapper>
        <Track variant={variant} checked={checked} />
      </Wrapper>
    );
  },
);
