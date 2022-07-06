import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { blue100, blue500, grayscale500, grayscale800, spacing } from '../../core';
import { DecoratorCss, TabProps } from './types';

const tabListTopPadding = spacing(2.5);

export const TabListDiv = styled.div<{ DecoratorCss: DecoratorCss | null }>`
  position: relative;
  display: flex;
  width: fit-content;
  white-space: nowrap;

  padding: ${tabListTopPadding}px ${spacing(3)}px;
  border-radius: 32px;
  box-shadow: 0 6px 12px 0 rgba(12, 142, 252, 0.15), 0 0 1px 0 rgba(12, 142, 252, 0.15);

  &::before {
    content: '';
    z-index: 1;
    position: absolute;
    top: ${tabListTopPadding}px;
    ${({ DecoratorCss }) =>
      DecoratorCss &&
      css`
        left: ${spacing(3) + DecoratorCss.left}px;
        width: ${DecoratorCss.width}px;
      `};
    height: calc(100% - ${tabListTopPadding * 2}px);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

    background-color: ${blue100};
    border-radius: 20px;
  }
`;

export const Tab = styled.button<Pick<TabProps, 'isSelected'>>`
  z-index: 2;
  display: flex;
  align-items: center;

  padding: ${spacing(2)}px ${spacing(6)}px;
  margin: 0;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;

  background-color: transparent;
  color: ${({ isSelected }) => (isSelected ? blue500 : grayscale800)};
  transition: color 300ms;

  &:disabled {
    color: ${grayscale500};
    cursor: not-allowed;
  }
`;
