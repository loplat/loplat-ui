import React from 'react';
import TextElementStyle, { TypographyProps } from '../BaseTypography';

const Headline1 = (props: TypographyProps): React.ReactElement => {
  return (
    <h1
      className={TextElementStyle({
        ...props,
        size: 28,
        weight: 'Extra-bold',
      })}
    >
      {props.children}
    </h1>
  );
};

export default Headline1;
