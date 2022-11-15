import React from 'react';
import type { SwitchProps } from './types';
import { Wrapper, ThumbWrapper, Thumb, Track } from './styles';
import { MarginSpacing, marginSpacingProps } from '../../core/Spacing';

export const Switch = ({ variant = 'solid', checked, onChange, ...props }: SwitchProps & MarginSpacing) => {
  return (
    <Wrapper {...marginSpacingProps(props)}>
      <ThumbWrapper variant={variant} className={props.disabled ? 'disabled' : ''}>
        <input type="checkbox" {...props} checked={checked} onChange={onChange} />
        <Thumb onClick={(e) => e.stopPropagation()} />
      </ThumbWrapper>
      <Track variant={variant} checked={checked} />
    </Wrapper>
  );
};
