import React from 'react';
import TextElementStyle, { TypographyProps } from '../BaseTypography';

const Caption1 = (props: TypographyProps): React.ReactElement => {
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

export default Caption1;
