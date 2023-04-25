import React from 'react';
import styled from '@emotion/styled';
import Logo from './welcome-logo.svg';
import { black, blue100 } from '../src/core/colors';
import { spacing } from '../src/core/Spacing';
import { Large, Small } from '../src/core/styles/mediaQuery';
import { Button } from '../src/components/Button';

export const Welcome = () => {
  const openGithubPage = () => {
    window.open('https://github.com/loplat/loplat-ui', '_blank');
  };

  const openNpmPage = () => {
    window.open('https://www.npmjs.com/package/loplat-ui', '_blank');
  };

  return (
    <Wrapper>
      <Image src={Logo} alt="" />
      <Section>
        <h1>Welcome 🙌</h1>
        <p>
          loplat UI Documentation & Demo를 위한 storybook website 입니다.
          <br />각 story의 Docs 패널을 통해 Props에 대한 설명과 사용법을 확인할 수 있습니다.
        </p>
        <div className="buttons">
          <Button variant="primary1" mr={4} onClick={openGithubPage}>
            Github
          </Button>
          <Button variant="primary2" onClick={openNpmPage}>
            NPM
          </Button>
        </div>
      </Section>
    </Wrapper>
  );
};

export default {
  title: 'Welcome',
  component: Welcome,
  parameters: {
    viewMode: 'canvas',
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
    options: {
      showPanel: false,
    },
  },
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;

  background-color: ${blue100};
  padding: ${spacing(16)}px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  ${Small} {
    flex-direction: column-reverse;
    padding: ${spacing(8)}px;
  }
`;

const Image = styled.img`
  ${Large} {
    width: 40%;
    max-width: 680px;
    margin-right: ${spacing(8)}px;
  }
  ${Small} {
    max-width: 500px;
    margin-top: ${spacing(12)}px;
  }
`;

const Section = styled.section`
  ${Large} {
    width: 45%;
    min-width: 540px;
  }

  & > h1 {
    font-size: 3rem;
    font-weight: bolder;
    color: ${black};
    ${Small} {
      text-align: center;
    }
  }

  & > p {
    color: ${black};
    line-height: 1.5;
    ${Small} {
      text-align: center;
    }
  }

  & > .buttons {
    display: flex;
    margin-top: ${spacing(10)}px;
    ${Small} {
      justify-content: center;
    }
  }
`;
