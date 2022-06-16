import React from 'react';
import { BaseTypography, TypographyProps } from '../BaseTypography';

type CaptionProps = TypographyProps & React.HTMLAttributes<HTMLSpanElement>;

export const Caption = ({ size = '2xs', ...props }: CaptionProps): React.ReactElement => {
  return (
    <BaseTypography as="small" size={size} {...props}>
      {props.children}
    </BaseTypography>
  );
};
