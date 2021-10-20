import React from 'react';
import styled from '@emotion/styled';

type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
interface Props {
  className?: string;
  divAttributes?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
  span?: ColSpan;
  gap?: number;
}

const sizeToPercent = (size?: ColSpan) => ((size !== undefined ? size : 12) / 12) * 100;
export const Col = ({ className, divAttributes, children, span, gap }: Props): React.ReactElement => {
  return (
    <StyledDiv className={className} {...divAttributes} span={span} gap={gap}>
      {children}
    </StyledDiv>
  );
};

const StyledDiv = styled.div<Props>`
  position: relative;
  box-sizing: border-box;
  padding-right: ${(props) => (typeof props.gap === 'number' ? `${props.gap / 2}rem` : '0.5rem')};
  padding-left: ${(props) => (typeof props.gap === 'number' ? `${props.gap / 2}rem` : '0.5rem')};
  min-height: 1px;
  width: ${(props) => sizeToPercent(props.span)}%;
`;
