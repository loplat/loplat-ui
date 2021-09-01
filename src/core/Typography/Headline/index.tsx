import React from 'react';
import TextElementStyle, { TypographyProps } from '../BaseTypography';

export const Headline1 = (props: TypographyProps): React.ReactElement => {
  return (
    <h1
      className={TextElementStyle({
        ...props,
        size: 28,
        weight: 'extraBold',
      })}
    >
      {props.children}
    </h1>
  );
};

export const Headline2 = (props: TypographyProps): React.ReactElement => {
  return (
    <h1
      className={TextElementStyle({
        ...props,
        size: 26,
        weight: 'extraBold',
      })}
    >
      {props.children}
    </h1>
  );
};

export const Headline3 = (props: TypographyProps): React.ReactElement => {
  return (
    <h1
      className={TextElementStyle({
        ...props,
        size: 20,
        weight: 'bold',
      })}
    >
      {props.children}
    </h1>
  );
};

export const Headline4 = (props: TypographyProps): React.ReactElement => {
  return (
    <h1
      className={TextElementStyle({
        ...props,
        size: 18,
        weight: 'bold',
      })}
    >
      {props.children}
    </h1>
  );
};
