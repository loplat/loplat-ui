import React from 'react';
import { BaseTypography, TypographyProps } from '../BaseTypography';

type HeadlineProps = TypographyProps & {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Headline = ({ tag = 'h1', ...props }: HeadlineProps): React.ReactElement => {
  return (
    <BaseTypography as={tag} {...props}>
      {props.children}
    </BaseTypography>
  );
};
