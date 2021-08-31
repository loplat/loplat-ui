import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Headline2 from './index';
import { TypographyProps } from '../BaseTypography';

export default {
  title: 'Typography/Headline2',
  component: Headline2,
} as ComponentMeta<typeof Headline2>;

const Template: ComponentStory<typeof Headline2> = (args: TypographyProps) => (
  <Headline2 {...args}>자율과 책임을 추구하는 location 전문 기업 로플랫</Headline2>
);

export const Default = Template.bind({});
Default.args = {};
