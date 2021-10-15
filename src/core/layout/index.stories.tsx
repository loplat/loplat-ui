import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Grid} from './Grid';
import {Row} from './Row';
import {Col} from './Col';
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
