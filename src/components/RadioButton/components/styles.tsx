import styled from '@emotion/styled';
import { highlight } from '../../../core/styles/decorator';
import { grayscale50, grayscale100 } from '../../../core/colors';

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div {
    padding: 1.25rem;
    width: 100%;
    height: fit-content;
    border: 1px solid ${grayscale100};
    border-radius: 4px;

    &:first-of-type {
      margin-right: 1rem;
    }

    h3 {
      display: inline;
      padding: 0 0.3rem;
      ${highlight()};
    }

    form {
      margin-top: 1rem;
      padding: 1.5rem;
      background-color: ${grayscale50};
    }
  }
`;

export const SingleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid ${grayscale100};
  border-radius: 4px;

  > label:not(:last-of-type) {
    margin-right: 2rem;
  }
`;
