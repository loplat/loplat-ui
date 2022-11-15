import React from 'react';
import { IconProps, CheckCircleOutlineIcon, WarningCircleOutlineIcon } from '../../../assets/Icon';
import { generateUniqueId } from '../../../functions/uniqueId';
import { BasePopupProps } from '../core/types';

export const generateCustomIcon = (
  icon: NonNullable<BasePopupProps['icon']>,
  mainColor: string,
): React.ReactElement<IconProps> => {
  const Icon = icon === 'check' ? CheckCircleOutlineIcon : icon === 'warning' ? WarningCircleOutlineIcon : icon;

  return <Icon size={32} fillColor={mainColor} suffixForId={`popup_icon_${generateUniqueId()}`} />;
};
