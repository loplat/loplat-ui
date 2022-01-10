import React from 'react';
import { textElementStyle, TypographyProps } from '../BaseTypography';

export const Caption = ({ size = '2xs', ...props }: TypographyProps): React.ReactElement => {
  return (
    <small
      className={`${textElementStyle({
        ...props,
        size,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </small>
  );
};
