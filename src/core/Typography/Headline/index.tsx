import React from 'react';
import { TextElementStyle, TypographyProps } from '../BaseTypography';

export const Headline1 = React.memo((props: TypographyProps): React.ReactElement => {
  return (
    <h1
      className={`${TextElementStyle({
        ...props,
        size: 2.5,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </h1>
  );
});

export const Headline2 = React.memo((props: TypographyProps): React.ReactElement => {
  return (
    <h2
      className={`${TextElementStyle({
        ...props,
        size: 2,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </h2>
  );
});

export const Headline3 = React.memo((props: TypographyProps): React.ReactElement => {
  return (
    <h3
      className={`${TextElementStyle({
        ...props,
        size: 1.75,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </h3>
  );
});

export const Headline4 = React.memo((props: TypographyProps): React.ReactElement => {
  return (
    <h4
      className={`${TextElementStyle({
        ...props,
        size: 1.5,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </h4>
  );
});

export const Headline5 = React.memo((props: TypographyProps): React.ReactElement => {
  return (
    <h5
      className={`${TextElementStyle({
        ...props,
        size: 1.25,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </h5>
  );
});

export const Headline6 = React.memo((props: TypographyProps): React.ReactElement => {
  return (
    <h6
      className={`${TextElementStyle({
        ...props,
        size: 1.13,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </h6>
  );
});
