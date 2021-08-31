import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Headline4 from './index';
import { TypographyProps } from '../BaseTypography';

export default {
  title: 'Typography/Headline4',
  component: Headline4,
} as ComponentMeta<typeof Headline4>;

const Template: ComponentStory<typeof Headline4> = (args: TypographyProps) => (
  <Headline4 {...args}>자율과 책임을 추구하는 location 전문 기업 로플랫</Headline4>
);

export const Default = Template.bind({});
Default.args = {};
