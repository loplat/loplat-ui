import React from 'react';
import styled from '@emotion/styled';

type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
interface Props {
  className?: string;
  divAttributes?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
  span?: ColSpan;
}

const sizeToPercent = (size?: ColSpan) => ((size !== undefined ? size : 12) / 12) * 100;
const Col = ({ className, divAttributes, children, span }: Props) => {
  return (
    <StyledDiv className={className} {...divAttributes} span={span}>
      {children}
    </StyledDiv>
  );
};

export const StyledDiv = styled.div<Props>`
  position: relative;
  box-sizing: border-box;
  padding-right: 10px;
  padding-left: 10px;
  min-height: 1px;
  width: ${(props) => sizeToPercent(props.span)}%;
`;

export default Col;