import React from 'react';
import { BaseTypography, TypographyProps } from '../BaseTypography';

type BodyProps = TypographyProps & {
  tag?: 'p' | 'span';
};

export const Body = ({ tag = 'p', ...props }: BodyProps): React.ReactElement => {
  return (
    <BaseTypography as={tag} {...props}>
      {props.children}
    </BaseTypography>
  );
};
