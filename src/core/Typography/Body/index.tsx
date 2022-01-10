import React from 'react';
import { textElementStyle, TypographyProps } from '../BaseTypography';

type BodyProps = TypographyProps & {
  tag?: 'p' | 'span';
};

export const Body = ({ tag = 'p', ...props }: BodyProps): React.ReactElement => {
  const HTMLBodyElement = tag;

  return (
    <HTMLBodyElement
      className={`${textElementStyle({
        ...props,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </HTMLBodyElement>
  );
};
