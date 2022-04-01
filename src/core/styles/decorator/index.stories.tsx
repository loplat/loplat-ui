import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { Body } from '../../Typography';
import { highlight, underline, UnderlineProps, HighlightProps } from './index';

// Underline
export const Underline = ({ bottom, width, height, borderRadius, color }: UnderlineProps): ReactElement => (
  <UnderlinedBody tag="span" underlineProps={{ bottom, width, height, borderRadius, color }}>
    파란 묻힌 계절
  </UnderlinedBody>
);
const UnderlinedBody = styled(Body)<{ underlineProps: UnderlineProps }>`
  ${({ underlineProps }) => underline(underlineProps)};
`;

// Highlight
export const Highlight = ({ width, positionX, color }: HighlightProps): ReactElement => (
  <HighlightedBody tag="span" highlightProps={{ width, positionX, color }}>
    파란 묻힌 계절이 동경과 언덕 덮어 된 이름자 있습니다.
  </HighlightedBody>
);
const HighlightedBody = styled(Body)<{ highlightProps: HighlightProps }>`
  ${({ highlightProps }) => highlight(highlightProps)};
`;
