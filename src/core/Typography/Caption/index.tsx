import React from 'react';
import { TextElementStyle, TypographyProps } from '../BaseTypography';

export const Caption = React.memo(({ size = '2xs', ...props }: TypographyProps): React.ReactElement => {
  return (
    <div
      className={`${TextElementStyle({
        ...props,
        size,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </div>
  );
});
