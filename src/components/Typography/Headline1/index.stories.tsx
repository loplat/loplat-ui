import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Headline1 from './index';
import { TypographyProps } from '../BaseTypography';

export default {
  title: 'Typography/Headline1',
  component: Headline1,
} as ComponentMeta<typeof Headline1>;

const Template: ComponentStory<typeof Headline1> = (args: TypographyProps) => (
  <Headline1 {...args}>자율과 책임을 추구하는 location 전문 기업 로플랫</Headline1>
);

export const Default = Template.bind({});
Default.args = {};
