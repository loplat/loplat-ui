import React from 'react';
import { TextElementStyle, TypographyProps } from '../BaseTypography';

type BodyProps = TypographyProps & {
  tag?: 'p' | 'span';
};

export const Body = React.memo(({ tag = 'p', ...props }: BodyProps): React.ReactElement => {
  const HTMLBodyElement = tag;
  return (
    <HTMLBodyElement
      className={`${TextElementStyle({
        ...props,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </HTMLBodyElement>
  );
});
