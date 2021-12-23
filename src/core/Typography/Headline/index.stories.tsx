import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Headline } from './index';
import { TypographyProps } from '../BaseTypography';
import { sizeProps } from '../BaseTypography/storyArgTypes';

export default {
  title: 'Typography/Headline',
  component: Headline,
  argTypes: {
    ...sizeProps,
  },
} as ComponentMeta<typeof Headline>;

const Template: ComponentStory<typeof Headline> = (args: TypographyProps) => (
  <>
    <Headline {...args}>자율과 책임을 추구하는 location 전문 기업 로플랫</Headline>
  </>
);

export const Default = Template.bind({});
Default.args = {};

export const BoldH3 = Template.bind({});
BoldH3.args = {
  textAlign: 'center',
  tag: 'h3',
  weight: 'bold',
};
