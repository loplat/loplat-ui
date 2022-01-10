import React from 'react';
import { DefaultButtonProps, ColorSet, SizeSet, BaseButton } from '../Button';
import { MarginSpacing, marginSpacingProps } from '../../core/Spacing';

export type IconButtonProps = DefaultButtonProps &
  MarginSpacing & {
    icon: React.ReactElement;
  };

export const IconButton = ({
  icon,
  color,
  disabled = false,
  onClick,
  className = '',
  ...props
}: IconButtonProps): React.ReactElement => {
  return (
    <BaseButton
      disabled={disabled}
      {...ColorSet[color ?? 'default']}
      {...SizeSet['onlyIcon']}
      {...marginSpacingProps(props)}
      className={className}
      onClick={onClick}
    >
      {icon}
    </BaseButton>
  );
};
