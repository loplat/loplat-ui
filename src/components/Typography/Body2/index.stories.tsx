import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Body2 from './index';
import { TypographyProps } from '../BaseTypography';

export default {
  title: 'Typography/Body2',
  component: Body2,
} as ComponentMeta<typeof Body2>;

const Template: ComponentStory<typeof Body2> = (args: TypographyProps) => (
  <Body2 {...args}>자율과 책임을 추구하는 location 전문 기업 로플랫</Body2>
);

export const Default = Template.bind({});
Default.args = {};
