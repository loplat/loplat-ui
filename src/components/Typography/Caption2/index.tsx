import React from 'react';
import TextElementStyle, { TypographyProps } from '../BaseTypography';

const Caption2 = (props: TypographyProps): React.ReactElement => {
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

export default Caption2;
