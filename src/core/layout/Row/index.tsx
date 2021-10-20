import React from 'react';
import styled from '@emotion/styled';

interface Props {
  className?: string;
  divAttributes?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
  gap?: number;
}

export const Row = ({ className, divAttributes, children, gap }: Props): React.ReactElement => {
  return (
    <StyledDiv className={className} {...divAttributes} gap={gap}>
      {children}
    </StyledDiv>
  );
};

const StyledDiv = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  margin-top: ${(props) => (props.gap ? `${props.gap / 2}rem` : '0.5rem')};
  margin-bottom: ${(props) => (props.gap ? `${props.gap / 2}rem` : '0.5rem')};
`;
