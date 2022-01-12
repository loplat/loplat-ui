import React from 'react';
import { BaseTypography, TypographyProps } from '../BaseTypography';

export const Caption = ({ size = '2xs', ...props }: TypographyProps): React.ReactElement => {
  return (
    <BaseTypography as="small" size={size} {...props}>
      {props.children}
    </BaseTypography>
  );
};
