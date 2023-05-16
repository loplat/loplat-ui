import styled from '@emotion/styled';
import { zIndex } from '../../core';

export const ContentWrapper = styled.div`
  display: flex;
  position: absolute;
  box-sizing: border-box;
  z-index: ${zIndex.popper};
  opacity: 0;
`;

export const TriggerWrapper = styled.div`
  display: flex;
  width: fit-content;
`;
