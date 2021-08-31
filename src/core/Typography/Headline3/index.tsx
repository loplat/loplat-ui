import React from 'react';
import TextElementStyle, { TypographyProps } from '../BaseTypography';

const Headline3 = (props: TypographyProps): React.ReactElement => {
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

export default Headline3;
