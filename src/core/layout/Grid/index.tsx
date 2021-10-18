import React from 'react';
import styled from '@emotion/styled';

interface Props {
  className?: string;
  divAttributes?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
}

export const Grid = ({ children, className, divAttributes }: Props) => {
  return (
    <StyledDiv className={className} {...divAttributes}>
      {children}
    </StyledDiv>
  );
};

const StyledDiv = styled.div<Props>`
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
