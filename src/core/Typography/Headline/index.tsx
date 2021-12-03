import React from 'react';
import { TextElementStyle, TypographyProps } from '../BaseTypography';

export const Headline = React.memo((props: TypographyProps): React.ReactElement => {
  return (
    <h1
      className={`${TextElementStyle({
        ...props,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </h1>
  );
});
