import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Headline3 from './index';
import { TypographyProps } from '../BaseTypography';

export default {
  title: 'Typography/Headline3',
  component: Headline3,
} as ComponentMeta<typeof Headline3>;

const Template: ComponentStory<typeof Headline3> = (args: TypographyProps) => (
  <Headline3 {...args}>자율과 책임을 추구하는 location 전문 기업 로플랫</Headline3>
);

export const Default = Template.bind({});
Default.args = {};
