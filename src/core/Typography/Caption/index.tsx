import React from 'react';
import TextElementStyle, { TypographyProps } from '../BaseTypography';

export const Caption1 = (props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={`${TextElementStyle({
        ...props,
        size: 0.63,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </div>
  );
};
