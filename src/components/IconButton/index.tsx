import React from 'react';
import { DefaultButtonProps, ColorSet, SizeSet, BaseButton, CommonButtonProps } from '../Button';
import { marginSpacingProps } from '../../core/Spacing';

export type IconButtonProps = DefaultButtonProps &
  Omit<CommonButtonProps, 'fullWidth'> & {
    children: React.ReactElement;
  };

export const IconButton = ({
  color,
  borderless,
  disabled = false,
  onClick,
  className = '',
  children,
  ...props
}: IconButtonProps): React.ReactElement => {
  return (
    <BaseButton
      disabled={disabled}
      borderless={borderless}
      {...ColorSet[color ?? 'default']}
      {...SizeSet['onlyIcon']}
      {...marginSpacingProps(props)}
      className={className}
      onClick={onClick}
    >
      {children}
    </BaseButton>
  );
};
