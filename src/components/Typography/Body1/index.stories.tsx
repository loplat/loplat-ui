import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Body1 from './index';
import { TypographyProps } from '../BaseTypography';

export default {
  title: 'Typography/Body1',
  component: Body1,
} as ComponentMeta<typeof Body1>;

const Template: ComponentStory<typeof Body1> = (args: TypographyProps) => (
  <Body1 {...args}>자율과 책임을 추구하는 location 전문 기업 로플랫</Body1>
);

export const Default = Template.bind({});
Default.args = {};
