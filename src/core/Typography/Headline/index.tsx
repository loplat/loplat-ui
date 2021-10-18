import React from 'react';
import TextElementStyle, { TypographyProps } from '../BaseTypography';

export const Headline1 = (props: TypographyProps): React.ReactElement => {
  return (
    <h1
      className={`${TextElementStyle({
        ...props,
        size: 2.5,
        weight: 'extraBold',
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </h1>
  );
};

export const Headline2 = (props: TypographyProps): React.ReactElement => {
  return (
    <h1
      className={`${TextElementStyle({
        ...props,
        size: 2,
        weight: 'extraBold',
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </h1>
  );
};

export const Headline3 = (props: TypographyProps): React.ReactElement => {
  return (
    <h1
      className={`${TextElementStyle({
        ...props,
        size: 1.75,
        weight: 'bold',
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </h1>
  );
};

export const Headline4 = (props: TypographyProps): React.ReactElement => {
  return (
    <h1
      className={`${TextElementStyle({
        ...props,
        size: 1.5,
        weight: 'bold',
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </h1>
  );
};

export const Headline5 = (props: TypographyProps): React.ReactElement => {
  return (
    <h1
      className={`${TextElementStyle({
        ...props,
        size: 1.25,
        weight: 'bold',
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </h1>
  );
};

export const Headline6 = (props: TypographyProps): React.ReactElement => {
  return (
    <h1
      className={`${TextElementStyle({
        ...props,
        size: 1.13,
        weight: 'bold',
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </h1>
  );
};
