import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Body4 from './index';
import { TypographyProps } from '../BaseTypography';

export default {
  title: 'Typography/Body4',
  component: Body4,
} as ComponentMeta<typeof Body4>;

const Template: ComponentStory<typeof Body4> = (args: TypographyProps) => (
  <Body4 {...args}>자율과 책임을 추구하는 location 전문 기업 로플랫</Body4>
);

export const Default = Template.bind({});
Default.args = {};
