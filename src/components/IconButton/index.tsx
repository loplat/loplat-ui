import React from 'react';
import { DefaultButtonProps, ColorSet, SizeSet, BaseButton } from '../Button';

export type IconButtonProps = DefaultButtonProps & {
  icon: React.ReactElement;
};

export const IconButton = ({
  icon,
  color,
  disabled = false,
  onClick,
  className = '',
}: IconButtonProps): React.ReactElement => {
  return (
    <BaseButton
      disabled={disabled}
      {...ColorSet[color ?? 'default']}
      {...SizeSet['onlyIcon']}
      className={className}
      onClick={onClick}
    >
      {icon}
    </BaseButton>
  );
};
