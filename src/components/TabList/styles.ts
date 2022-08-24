import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { blue100, blue500, grayscale50, grayscale500, grayscale800, spacing, white } from '../../core';
import type { TabListStyles, DecoratorPosition, TabProps, TabListType } from './types';

const tabListTopPadding = spacing(2.5);

export const TabListDiv = styled.div<{ decoratorPosition: DecoratorPosition | null } & { styles: TabListStyles }>`
  position: relative;
  display: flex;
  width: fit-content;
  white-space: nowrap;
  padding: ${tabListTopPadding}px ${spacing(3)}px;

  ${({ decoratorPosition, styles }) =>
    css`
      background-color: ${styles.tabList.backgroundColor};
      border-radius: ${styles.tabList.borderRadius}px;
      box-shadow: ${styles.tabList.boxShadow};

      &::before {
        content: '';
        z-index: 1;
        position: absolute;
        top: ${tabListTopPadding}px;
        ${decoratorPosition &&
        css`
          left: ${decoratorPosition.left}px;
          width: ${decoratorPosition.width}px;
        `}
        height: calc(100% - ${tabListTopPadding * 2}px);
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

        background-color: ${styles.tab.activeBackgroundColor};
        border-radius: ${styles.tab.borderRadius}px;
        box-shadow: ${styles.tab.boxShadow};
      }
    `};
`;

export const Tab = styled.button<Pick<TabProps, 'isSelected'> & { styles: TabListStyles }>`
  z-index: 2;
  display: flex;
  align-items: center;

  font-size: 1rem;
  margin: 0;
  padding: ${spacing(2)}px ${spacing(6)}px;
  border: none;

  ${({ isSelected, styles }) => css`
    color: ${isSelected ? styles.tab.activeColor : styles.tab.color};
    background-color: ${styles.tab.backgroundColor};
    border-radius: ${styles.tab.borderRadius}px;
  `};

  transition: color 300ms;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:disabled {
    color: ${grayscale500};
    cursor: not-allowed;
  }
`;

export const allDefaultStyles: { [type in TabListType]: TabListStyles } = {
  rectangle: {
    tabList: {
      backgroundColor: grayscale50,
      borderRadius: 4,
    },
    tab: {
      color: grayscale800,
      backgroundColor: 'transparent',
      activeColor: blue500,
      activeBackgroundColor: white,
      borderRadius: 4,
      boxShadow: '0 1px 4px 0 rgba(34, 34, 34, 0.15)',
    },
  },
  ellipse: {
    tabList: {
      backgroundColor: white,
      borderRadius: 32,
      boxShadow: '0 6px 12px 0 rgba(12, 142, 252, 0.15), 0 0 1px 0 rgba(12, 142, 252, 0.15)',
    },
    tab: {
      color: grayscale800,
      backgroundColor: 'transparent',
      activeColor: blue500,
      activeBackgroundColor: blue100,
      borderRadius: 20,
    },
  },
};
