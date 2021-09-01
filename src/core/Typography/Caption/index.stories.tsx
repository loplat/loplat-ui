import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Caption1, Caption2 } from './index';
import { TypographyProps } from '../BaseTypography';

export default {
  title: 'Typography/Caption',
  component: Caption1,
  subcomponents: { Caption2 },
} as ComponentMeta<typeof Caption1>;

const Template: ComponentStory<typeof Caption1> = (args: TypographyProps) => (
  <>
    <Caption1 {...args}>Caption1 자율과 책임을 추구하는 location 전문 기업 로플랫</Caption1>
    <Caption2 {...args}>Caption2 자율과 책임을 추구하는 location 전문 기업 로플랫</Caption2>
  </>
);

export const Default = Template.bind({});
Default.args = {};
