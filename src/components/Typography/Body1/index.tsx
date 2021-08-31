import React from 'react';
import TextElementStyle, { TypographyProps } from '../BaseTypography';

const Body1 = (props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={TextElementStyle({
        ...props,
        size: 16,
        weight: 'regular',
      })}
    >
      {props.children}
    </div>
  );
};

export default Body1;
