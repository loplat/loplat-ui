import React from 'react';
import { ColorSet, SizeSet, BaseButton, CommonButtonProps } from '../Button';
import { marginSpacingProps } from '../../core/Spacing';

export type IconButtonProps = CommonButtonProps & {
  children: React.ReactElement;
};

export const IconButton = ({ color, borderless, children, ...props }: IconButtonProps): React.ReactElement => {
  return (
    <BaseButton
      borderless={borderless}
      {...ColorSet[color ?? 'default']}
      {...SizeSet['onlyIcon']}
      {...marginSpacingProps(props)}
      {...props}
    >
      {children}
    </BaseButton>
  );
};
