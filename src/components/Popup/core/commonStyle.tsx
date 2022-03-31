import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { white } from '../../../core/colors';
import { Large, Small } from '../../../core/MediaQuery';

export const WrapperCommonStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  word-break: keep-all;
  margin-bottom: 32px;
`;

export const Dialog = styled.div`
  background-color: ${white};
  border-radius: 16px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${Large} {
    max-width: 400px;
    padding: 24px 32px;
  }
  ${Small} {
    max-width: 100%;
    padding: 16px 24px;
  }
`;

export const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;

  button {
    &:first-of-type {
      margin-right: 15px;
    }

    ${Small} {
      padding: 16px 0;
    }
  }
`;
