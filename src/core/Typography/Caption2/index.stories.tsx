import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Caption2 from './index';
import { TypographyProps } from '../BaseTypography';

export default {
  title: 'Typography/Caption2',
  component: Caption2,
} as ComponentMeta<typeof Caption2>;

const Template: ComponentStory<typeof Caption2> = (args: TypographyProps) => (
  <Caption2 {...args}>자율과 책임을 추구하는 location 전문 기업 로플랫</Caption2>
);

export const Default = Template.bind({});
Default.args = {};
