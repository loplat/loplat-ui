import React from 'react';
import { IconProps, CheckCircleOutlineIcon, WarningCircleOutlineIcon } from '../../../assets/Icon';
import { generateUniqueId } from '../../../functions/generator';
import { Popup1Props } from '../core/types';

export const generateCustomIcon = (
  icon: NonNullable<Popup1Props['icon']>,
  mainColor: string,
): React.ReactElement<IconProps> => {
  const Icon = icon === 'check' ? <CheckCircleOutlineIcon /> : icon === 'warning' ? <WarningCircleOutlineIcon /> : icon;

  return React.cloneElement(Icon, {
    size: 32,
    fillColor: mainColor,
    suffixForId: `popup_icon_${generateUniqueId()}`,
  });
};
