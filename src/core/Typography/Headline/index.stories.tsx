import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Headline1, Headline2, Headline3, Headline4, Headline5 } from './index';
import { TypographyProps } from '../BaseTypography';

export default {
  title: 'Typography/Headline',
  component: Headline1,
  subcomponents: { Headline2, Headline3, Headline4, Headline5 },
} as ComponentMeta<typeof Headline1>;

const Template: ComponentStory<typeof Headline1> = (args: TypographyProps) => (
  <>
    <Headline1 {...args}>Headline1 자율과 책임을 추구하는 location 전문 기업 로플랫</Headline1>
    <Headline2 {...args}>Headline2 자율과 책임을 추구하는 location 전문 기업 로플랫</Headline2>
    <Headline3 {...args}>Headline3 자율과 책임을 추구하는 location 전문 기업 로플랫</Headline3>
    <Headline4 {...args}>Headline4 자율과 책임을 추구하는 location 전문 기업 로플랫</Headline4>
    <Headline5 {...args}>Headline5 자율과 책임을 추구하는 location 전문 기업 로플랫</Headline5>
  </>
);

export const Default = Template.bind({});
Default.args = {};
