import styled from '@emotion/styled';
import { white, spacing, NotMobile, grayscale900, bluescale600 } from '../../core';

export const PopupWrapper = styled.div`
  background-color: ${white};
  border-radius: 16px;
  box-shadow: 8px 2px 12px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: max-content;
  max-width: 100vw;
  max-height: 100vh;
  padding: ${spacing(6)}px;

  word-break: keep-all;
  text-align: center;

  .popup__close {
    position: absolute;
    top: 10px;
    right: 10px;
    svg g path {
      fill: ${bluescale600};
    }
  }

  ${NotMobile} {
    min-width: 384px;
    padding: ${spacing(8)}px ${spacing(6)}px;
  }
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${spacing(4)}px;

  font-weight: bold;
  font-size: 1rem;
  line-height: 1.875rem;

  .popup__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${spacing(3)}px;
  }
  & ~ .popup__content {
    margin-top: 0;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${grayscale900};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;

  margin: ${spacing(5)}px auto auto auto;
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: ${spacing(3)}px;
  margin-top: ${spacing(4)}px;
`;
