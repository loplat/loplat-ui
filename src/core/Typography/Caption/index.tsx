import React from 'react';
import TextElementStyle, { TypographyProps } from '../BaseTypography';

export const Caption1 = (props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={TextElementStyle({
        ...props,
        size: 10,
      })}
    >
      {props.children}
    </div>
  );
};

export const Caption2 = (props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={TextElementStyle({
        ...props,
        size: 9,
      })}
    >
      {props.children}
    </div>
  );
};
