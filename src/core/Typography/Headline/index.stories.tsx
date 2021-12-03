import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Headline } from './index';
import { TypographyProps } from '../BaseTypography';

export default {
  title: 'Typography/Headline',
  component: Headline,
} as ComponentMeta<typeof Headline>;

const Template: ComponentStory<typeof Headline> = (args: TypographyProps) => (
  <>
    <Headline {...args} size="xl" my={2}>
      Headline 자율과 책임을 추구하는 location 전문 기업 로플랫
    </Headline>
    <Headline {...args} size="3xl" my={2}>
      Headline 자율과 책임을 추구하는 location 전문 기업 로플랫
    </Headline>
    <Headline {...args} size="5xl" my={2}>
      Headline 자율과 책임을 추구하는 location 전문 기업 로플랫
    </Headline>
  </>
);

export const Default = Template.bind({});
Default.args = {};
