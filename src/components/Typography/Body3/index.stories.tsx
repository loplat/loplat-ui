import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Body3 from './index';
import { TypographyProps } from '../BaseTypography';

export default {
  title: 'Typography/Body3',
  component: Body3,
} as ComponentMeta<typeof Body3>;

const Template: ComponentStory<typeof Body3> = (args: TypographyProps) => (
  <Body3 {...args}>자율과 책임을 추구하는 location 전문 기업 로플랫</Body3>
);

export const Default = Template.bind({});
Default.args = {};
