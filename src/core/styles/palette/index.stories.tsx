import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { palette } from '.';

export const Palette = (): ReactElement => (
  <div>
    {Object.entries(palette).map(([paletteName, color]) => (
      <StyledColor key={paletteName}>
        <h3>{paletteName}</h3>
        <StyledBox color={color} />
      </StyledColor>
    ))}
  </div>
);

const StyledColor = styled.div`
  margin-bottom: 30px;
`;

const StyledBox = styled.div`
  width: 50px;
  height: 50px;
  ${({ color }) => `
    background-color: ${color};
  `}
`;
