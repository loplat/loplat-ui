import React from 'react';
import styled from '@emotion/styled';

interface Props {
  className?: string;
  divAttributes?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
}

const Row = ({ className, divAttributes, children }: Props): React.ReactElement => {
  return (
    <StyledDiv className={className} {...divAttributes}>
      {children}
    </StyledDiv>
  );
};

const StyledDiv = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export default Row;
