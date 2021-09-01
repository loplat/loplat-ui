import React from 'react';
import TextElementStyle, { TypographyProps } from '../BaseTypography';

export const Body1 = (props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={TextElementStyle({
        ...props,
        size: 16,
      })}
    >
      {props.children}
    </div>
  );
};

export const Body2 = (props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={TextElementStyle({
        ...props,
        size: 14,
      })}
    >
      {props.children}
    </div>
  );
};

export const Body3 = (props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={TextElementStyle({
        ...props,
        size: 12,
      })}
    >
      {props.children}
    </div>
  );
};

export const Body4 = (props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={TextElementStyle({
        ...props,
        size: 11,
      })}
    >
      {props.children}
    </div>
  );
};
