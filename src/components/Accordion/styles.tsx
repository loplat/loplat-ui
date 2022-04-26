import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { black, bluescale100, grayscale200, grayscale800, blue100 } from '../../core/colors';
import { primary } from '../../core/styles/palette';
import { transition } from '../../core/styles/transition';
import { spacing } from '../../core';
import { AccordionProps } from './types';

type DetailsProps = Pick<Required<AccordionProps>, 'duration' | 'type'> & {
  expanded: boolean;
};
export const Details = styled.details<DetailsProps>(
  (props) => css`
    background-color: white;
    overflow: hidden;
    border-bottom: ${props.type === 'line' ? `1px solid ${grayscale200}` : ''};
    ${transition('background,height', props.duration)};

    summary ~ * {
      ${transition('height', props.duration)};
      background-color: ${props.type === 'fill' ? bluescale100 : ''};
    }

    summary {
      ${transition('background-color, color', props.duration)};
      color: ${black};
      &:hover,
      :focus {
        background-color: ${blue100};
      }
      svg {
        will-change: transform;
        ${transition('transform', props.duration)}
        transform: rotate(0deg);
      }
    }

    ${props.expanded &&
    ` background-color: ${props.type === 'fill' ? bluescale100 : ''};
      summary {
        color: ${primary};
        background-color: ${props.type === 'fill' ? bluescale100 : ''};
        svg {
          transform: rotate(-180deg);
        }
      }`};
  `,
);

export const Summary = styled.summary`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing(4)}px ${spacing(6)}px;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }
`;

export const Heading = styled.h3`
  margin: 0;
  line-height: 24px;
  font-weight: normal;
  font-size: 1rem;
`;

export const Body = styled.div`
  font-size: 1rem;
  color: ${grayscale800};
  height: 0px;
  min-height: 0px;
  > div {
    padding: ${spacing(4)}px ${spacing(6)}px ${spacing(8)}px;
  }
`;
