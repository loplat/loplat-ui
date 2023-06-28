import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { ModalProps } from '.';

export const opacityIn = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-15%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalWrapper = styled.div<Pick<ModalProps, 'zIndex'>>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${({ zIndex }) => zIndex};
  box-sizing: border-box;

  > .background {
    width: 100%;
    height: 100%;
    &.mask {
      background-color: rgba(0, 0, 0, 0.4);
      animation: ${opacityIn} 200ms ease-in;
      animation-fill-mode: forwards;
    }
  }

  > .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100vw;
    > div,
    > section {
      animation: ${slideIn} 200ms ease-in;
      animation-fill-mode: forwards;
    }
  }
`;
