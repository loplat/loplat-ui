import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Caption } from './index';
import { TypographyProps } from '../BaseTypography';

export default {
  title: 'Typography/Caption',
  component: Caption,
} as ComponentMeta<typeof Caption>;

const Template: ComponentStory<typeof Caption> = (args: TypographyProps) => (
  <>
    <Caption {...args}>Caption 자율과 책임을 추구하는 location 전문 기업 로플랫</Caption>
  </>
);

export const Default = Template.bind({});
Default.args = {};
