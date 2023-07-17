'use client';

import React, { ForwardedRef } from 'react';
import { COLOR_SET, SIZE_SET, BaseButton, CommonButtonProps } from '../Button';
import { marginSpacingProps } from '../../core/Spacing';

export type IconButtonProps = CommonButtonProps & {
  children: React.ReactElement;
};

export const IconButton = React.forwardRef(
  (
    { variant = 'white', children, ...props }: IconButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ): React.ReactElement => {
    return (
      <BaseButton {...COLOR_SET[variant]} {...SIZE_SET['onlyIcon']} {...marginSpacingProps(props)} {...props} ref={ref}>
        {children}
      </BaseButton>
    );
  },
);
