import React from 'react';
import TextElementStyle, { TypographyProps } from '../BaseTypography';

const Body4 = (props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={TextElementStyle({
        ...props,
        size: 11,
      })}
    >
      {props.children}
    </div>
  );
};

export default Body4;
