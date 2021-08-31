import React from 'react';
import TextElementStyle, { TypographyProps } from '../BaseTypography';

const Headline4 = (props: TypographyProps): React.ReactElement => {
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

export default Headline4;
