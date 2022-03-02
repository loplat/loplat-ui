import styled from '@emotion/styled';

export const Icons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    margin: 16px;
    min-width: 4rem;
    min-height: 3rem;
    padding: 8px 16px;

    & > span {
      margin-top: 8px;
    }
  }
`;
