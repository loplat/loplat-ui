import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { black, bluescale100, grayscale200, grayscale800, blue100, white } from '../../../core/colors';
import { primary } from '../../../core/styles/palette';
import { transition } from '../../../core/styles/transition';
import { spacing } from '../../../core';
import { AccordionProps } from './types';

const changeVisibilityStyle = (isVisible: boolean, duration = 0.2) => {
  if (isVisible) {
    return css`
      visibility: visible;
      ${transition('height', duration)}
      will-change: height, visibility;
    `;
  }
  return css`
    visibility: hidden;
    will-change: height, visibility;
    transition: height ${duration}s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s ${duration}s;
  `;
};

export const Heading = styled.h3`
  margin: 0;
  line-height: 24px;
  font-weight: normal;
  font-size: 1rem;
  &:focus {
    color: ${primary};
  }
  &:hover {
    background-color: ${blue100};
  }

  button {
    cursor: pointer;
    color: inherit;
    font-size: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: none;
    padding: ${spacing(4)}px ${spacing(6)}px;
    width: 100%;
    background-color: transparent;
  }
`;

export const Wrapper = styled.div<Pick<Required<AccordionProps>, 'type' | 'isExpanded' | 'duration'>>`
  box-sizing: border-box;
  ${({ type, duration, isExpanded }) =>
    css`
      ${transition('background-color', duration)};
      background-color: ${type === 'fill' && isExpanded ? bluescale100 : white};
      border-bottom: ${type === 'line' && `1px solid ${grayscale200}`};

      .heading {
        ${transition('background-color', duration)};
        color: ${isExpanded ? primary : `${black}`};
        > button {
          ${transition('color', duration)};
        }
      }

      .accordion_chevron {
        ${transition('transform', duration)};
        transform: ${isExpanded ? 'rotate(-180deg)' : 'rotate(0deg)'};
      }
    `};
`;

export const Body = styled.div<{ height: number } & Pick<AccordionProps, 'isExpanded' | 'duration'>>`
  overflow: hidden;
  font-size: 1rem;
  color: ${grayscale800};
  height: ${({ height }) => height}px;
  ${({ height, duration }) => changeVisibilityStyle(height !== 0, duration)}

  > div {
    padding: ${spacing(2)}px ${spacing(6)}px ${spacing(8)}px;
  }
`;
