import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Grid } from './Grid';
import { Row } from './Row';
import { Col } from './Col';
import styled from '@emotion/styled';

const StyledCol = styled(Col)`
  background-color: wheat;
  border: 1px solid red;
`;

const Layout = () => {
  return (
    <Grid>
      <Row>
        <StyledCol>12</StyledCol>
      </Row>
      <Row gap={4}>
        <StyledCol span={6}>Row에 gap 4를 주었어요! 위, 아래로 2rem씩 간격을 갖습니다.</StyledCol>
        <StyledCol span={6}>Row에 gap 4를 주었어요! 위, 아래로 2rem씩 간격을 갖습니다.</StyledCol>
      </Row>
      <Row>
        <StyledCol span={6} gap={4}>
          Col에 gap 4를 주었어요! 좌, 우로 2rem씩 간격을 갖습니다.
        </StyledCol>
        <StyledCol span={6} gap={4}>
          Col에 gap 4를 주었어요! 좌, 우로 2rem씩 간격을 갖습니다.
        </StyledCol>
      </Row>
      <Row>
        <StyledCol span={6}>6</StyledCol>
        <StyledCol span={6}>6</StyledCol>
      </Row>
      <Row>
        <StyledCol span={4}>4</StyledCol>
        <StyledCol span={4}>4</StyledCol>
        <StyledCol span={4}>4</StyledCol>
      </Row>
      <Row>
        <StyledCol span={3}>3</StyledCol>
        <StyledCol span={3}>3</StyledCol>
        <StyledCol span={3}>3</StyledCol>
        <StyledCol span={3}>3</StyledCol>
      </Row>
      <Row>
        <StyledCol span={2}>2</StyledCol>
        <StyledCol span={2}>2</StyledCol>
        <StyledCol span={2}>2</StyledCol>
        <StyledCol span={2}>2</StyledCol>
        <StyledCol span={2}>2</StyledCol>
        <StyledCol span={2}>2</StyledCol>
      </Row>
      <Row>
        <StyledCol span={1}>1</StyledCol>
        <StyledCol span={1}>1</StyledCol>
        <StyledCol span={1}>1</StyledCol>
        <StyledCol span={1}>1</StyledCol>
        <StyledCol span={1}>1</StyledCol>
        <StyledCol span={1}>1</StyledCol>
        <StyledCol span={1}>1</StyledCol>
        <StyledCol span={1}>1</StyledCol>
        <StyledCol span={1}>1</StyledCol>
        <StyledCol span={1}>1</StyledCol>
        <StyledCol span={1}>1</StyledCol>
        <StyledCol span={1}>1</StyledCol>
      </Row>
    </Grid>
  );
};

export default {
  title: 'Layout/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = () => <Layout />;

export const Default = Template.bind({});
Default.args = {};
