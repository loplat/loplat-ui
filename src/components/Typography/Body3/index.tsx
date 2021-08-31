import React from 'react';
import TextElementStyle, { TypographyProps } from '../BaseTypography';

const Body3 = (props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={TextElementStyle({
        ...props,
        size: 12,
      })}
    >
      {props.children}
    </div>
  );
};

export default Body3;
