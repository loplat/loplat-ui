import React, { ForwardedRef } from 'react';
import { ColorSet, SizeSet, BaseButton, CommonButtonProps } from '../Button';
import { marginSpacingProps } from '../../core/Spacing';

export type IconButtonProps = CommonButtonProps & {
  children: React.ReactElement;
};

export const IconButton = React.forwardRef(
  ({ color, children, ...props }: IconButtonProps, ref: ForwardedRef<HTMLButtonElement>): React.ReactElement => {
    return (
      <BaseButton
        {...ColorSet[color ?? 'default']}
        {...SizeSet['onlyIcon']}
        {...marginSpacingProps(props)}
        {...props}
        ref={ref}
      >
        {children}
      </BaseButton>
    );
  },
);
