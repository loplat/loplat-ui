import React from 'react';
import { TextElementStyle, TypographyProps } from '../BaseTypography';

export const Body1 = React.memo((props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={`${TextElementStyle({
        ...props,
        size: 1,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </div>
  );
});

export const Body2 = React.memo((props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={`${TextElementStyle({
        ...props,
        size: 0.88,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </div>
  );
});

export const Body3 = React.memo((props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={`${TextElementStyle({
        ...props,
        size: 0.75,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </div>
  );
});
