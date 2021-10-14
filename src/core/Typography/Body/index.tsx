import React from 'react';
import TextElementStyle, { TypographyProps } from '../BaseTypography';

export const Body1 = (props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={`${TextElementStyle({
        ...props,
        size: 1,
      })} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export const Body2 = (props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={`${TextElementStyle({
        ...props,
        size: 0.88,
      })} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export const Body3 = (props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={`${TextElementStyle({
        ...props,
        size: 0.75,
      })} ${props.className}`}
    >
      {props.children}
    </div>
  );
};
