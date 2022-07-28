import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { black, bluescale100, grayscale200, grayscale800, blue100 } from '../../core/colors';
import { primary } from '../../core/styles/palette';
import { transition } from '../../core/styles/transition';
import { spacing } from '../../core';

export const Summary = styled.summary<{ iconPosition: 'start' | 'end' }>(
  ({ iconPosition }) => css`
    cursor: pointer;
    display: block;
    background-color: white;
    &::-webkit-details-marker {
      display: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    span,
    p {
      word-break: break-word;
      text-align: left;
    }
    > div {
      display: grid;
      column-gap: ${spacing(4)}px;
      ${iconPosition === 'start' && `grid-template-columns: [icon] max-content [children] 1fr`};
      ${iconPosition === 'end' && `grid-template-columns: [children] 1fr [icon] max-content`};
      grid-template-rows: auto;
      align-items: center;
      padding: ${spacing(4)}px ${spacing(6)}px;

      > * {
        &:not(div[data-type='icon']) {
          grid-column-start: children;
        }
      }
    }
  `,
);

export const IconWrapper = styled.div`
  grid-column-start: icon;
  grid-row: 1;
  display: grid;
  align-items: center;
`;

export const Heading = styled.h3`
  margin: 0;
  line-height: 24px;
  font-weight: normal;
  font-size: 1rem;
`;

export const Content = styled.div`
  overflow: hidden;
  font-size: 1rem;
  color: ${grayscale800};
  height: 0px;
  min-height: 0px;

  p,
  span {
    word-break: break-word;
    text-align: left;
  }

  > div {
    line-height: 24px;
    padding: ${spacing(4)}px ${spacing(6)}px ${spacing(8)}px;
  }
`;

type DetailsProps = {
  type: 'line' | 'fill';
  duration: number;
  easing: string;
};
export const Details = styled.details<DetailsProps>(
  ({ type, duration, easing }) => css`
    background-color: white;
    border-bottom: ${type === 'line' ? `1px solid ${grayscale200}` : ''};
    ${transition('background,height', duration, easing)};

    summary ~ * {
      background-color: ${type === 'fill' ? bluescale100 : ''};
    }

    summary {
      ${transition('background-color, color', duration, easing)};
      color: ${black};
      &:hover,
      :focus {
        background-color: ${blue100};
      }
    }

    &.expanded {
      background-color: ${type === 'fill' ? bluescale100 : ''};
      summary {
        color: ${primary};
        background-color: ${type === 'fill' ? bluescale100 : ''};
      }
    }
  `,
);
