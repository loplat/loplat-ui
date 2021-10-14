import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Body1, Body2, Body3 } from './index';
import { TypographyProps } from '../BaseTypography';

export default {
  title: 'Typography/Body',
  component: Body1,
  subcomponents: { Body2, Body3 },
} as ComponentMeta<typeof Body1>;

const Template: ComponentStory<typeof Body1> = (args: TypographyProps) => (
  <>
    <Body1 {...args}>Body1 자율과 책임을 추구하는 location 전문 기업 로플랫</Body1>
    <Body2 {...args}>Body2 자율과 책임을 추구하는 location 전문 기업 로플랫</Body2>
    <Body3 {...args}>Body3 자율과 책임을 추구하는 location 전문 기업 로플랫</Body3>
  </>
);

export const Default = Template.bind({});
Default.args = {};
