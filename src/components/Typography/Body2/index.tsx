import React from 'react';
import TextElementStyle, { TypographyProps } from '../BaseTypography';

const Body2 = (props: TypographyProps): React.ReactElement => {
  return (
    <div
      className={TextElementStyle({
        ...props,
        size: 14,
      })}
    >
      {props.children}
    </div>
  );
};

export default Body2;
