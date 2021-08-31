import React from 'react';
import styled from '@emotion/styled';

interface Props {
  className?: string;
  divAttributes?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
}

const Row = ({ className, divAttributes, children }: Props) => {
  return (
    <StyledDiv className={className} {...divAttributes}>
      {children}
    </StyledDiv>
  );
};

export const StyledDiv = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default Row;
