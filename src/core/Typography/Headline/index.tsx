import React from 'react';
import { textElementStyle, TypographyProps } from '../BaseTypography';

type HeadlineProps = TypographyProps & {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Headline = ({ tag = 'h1', ...props }: HeadlineProps): React.ReactElement => {
  const HTMLHeadlineElement = tag;
  return (
    <HTMLHeadlineElement
      className={`${textElementStyle({
        ...props,
      })} ${props.className ?? ''}`}
    >
      {props.children}
    </HTMLHeadlineElement>
  );
};
