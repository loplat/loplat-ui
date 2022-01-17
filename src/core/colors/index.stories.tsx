import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { colors } from '.';

export const Colors = (): ReactElement => (
  <div>
    {Object.entries(colors).map(([color, value]) => (
      <StyledColor key={color}>
        <h4>{color}</h4>
        {typeof value === 'object' ? (
          <StyledBoxList>
            {Object.entries(value).map(([density, value]) => (
              <li key={value}>
                <span>{density}</span>
                <StyledBox color={value} />
              </li>
            ))}
          </StyledBoxList>
        ) : (
          <StyledBox color={value} />
        )}
      </StyledColor>
    ))}
  </div>
);

export default {
  title: 'core/colors',
  default: Colors,
};

const StyledColor = styled.div`
  margin-bottom: 30px;
`;

const StyledBoxList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;
const StyledBox = styled.div`
  width: 50px;
  height: 50px;
  ${({ color }) => `
    background-color: ${color};
  `}
`;
