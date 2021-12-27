import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Body } from './index';
import { TypographyProps } from '../BaseTypography';
import { sizeProps } from '../BaseTypography/storyArgTypes';

export default {
  title: 'Typography/Body',
  component: Body,
  argTypes: {
    ...sizeProps,
  },
} as ComponentMeta<typeof Body>;

const Template: ComponentStory<typeof Body> = (args: TypographyProps) => (
  <>
    <Body {...args}>자율과 책임을 추구하는 location 전문 기업 로플랫</Body>
  </>
);

export const Default = Template.bind({});
Default.args = {};
