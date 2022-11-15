import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { AccordionProps } from './types';
import { black, bluescale100, grayscale200, grayscale800, blue100 } from '../../core/colors';
import { primary } from '../../core/styles/palette';
import { transition } from '../../core/styles/transition';
import { spacing } from '../../core';

export const Summary = styled.summary`
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  color: ${black};
  background-color: inherit;
  border: inherit;
  border-radius: inherit;
  outline: none;
  &:hover,
  :focus {
    background-color: ${blue100};
  }
  &::-webkit-details-marker {
    display: none;
  }

  > div {
    word-break: keep-all;
    display: grid;
    grid-template-rows: auto;
    column-gap: ${spacing(4)}px;
    align-items: center;
    padding: ${spacing(4)}px ${spacing(6)}px;

    &.iconPosition {
      &_start {
        grid-template-columns: [icon] max-content [children] 1fr;
      }
      &_end {
        grid-template-columns: [children] 1fr [icon] max-content;
      }
    }
  }
`;

export const IconWrapper = styled.div`
  grid-column-start: icon;
  grid-row: 1;
  display: flex;
  align-items: center;

  & ~ * {
    grid-column-start: children;
  }
`;

export const Content = styled.div`
  font-size: 1rem;
  color: ${grayscale800};
  height: 0px;
  min-height: 0px;

  > div {
    line-height: 24px;
    padding: ${spacing(4)}px ${spacing(6)}px ${spacing(8)}px;
    word-break: keep-all;
    text-align: left;
  }

  &.fill {
    background-color: ${bluescale100};
  }
`;

type DetailsProps = Pick<AccordionProps, 'variant' | 'duration' | 'easing'>;
export const Details = styled.details<DetailsProps>(
  ({ variant, duration, easing }) => css`
    ${transition('background,height', duration, easing)};
    overflow: hidden;
    background-color: white;
    border-bottom: ${variant === 'line' ? `1px solid ${grayscale200}` : ''};

    summary {
      ${transition('background-color, color', duration, easing)};

      &:focus {
        color: ${variant === 'fill' && primary};
      }
    }

    &.expanded {
      background-color: ${variant === 'fill' ? bluescale100 : ''};
      summary {
        color: ${primary};
        background-color: ${variant === 'fill' ? bluescale100 : ''};
      }
    }
  `,
);
