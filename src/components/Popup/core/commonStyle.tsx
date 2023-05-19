import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { bluescale500, white } from '../../../core/colors';
import { NotMobile, Small } from '../../../core/styles/mediaQuery';
import { spacing } from '../../../core';

export const WrapperCommonStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  word-break: keep-all;
  margin-bottom: ${spacing(8)}px;
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

  width: fit-content;
  max-width: 100vw;
  padding: ${spacing(4)}px ${spacing(6)}px;

  .close_dialog {
    svg g path {
      fill: ${bluescale500};
    }
  }

  ${NotMobile} {
    max-width: 400px;
    padding: ${spacing(6)}px ${spacing(8)}px;
  }
`;

export const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;

  button {
    &:first-of-type {
      margin-right: ${spacing(4)}px;
    }

    ${Small} {
      padding: ${spacing(4)}px 0;
    }
  }
`;
