import React from 'react';
import { TextElementStyle, TypographyProps } from '../BaseTypography';

export const Body = (props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={`${TextElementStyle({
        ...props,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </div>
  );
};
