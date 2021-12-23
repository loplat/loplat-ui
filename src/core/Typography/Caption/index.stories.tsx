import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Caption } from './index';
import { TypographyProps } from '../BaseTypography';
import { sizeProps } from '../BaseTypography/storyArgTypes';

export default {
  title: 'Typography/Caption',
  component: Caption,
  argTypes: {
    ...sizeProps,
  },
} as ComponentMeta<typeof Caption>;

const Template: ComponentStory<typeof Caption> = (args: TypographyProps) => (
  <>
    <Caption {...args}>Caption 자율과 책임을 추구하는 location 전문 기업 로플랫</Caption>
  </>
);

export const Default = Template.bind({});
Default.args = {};
