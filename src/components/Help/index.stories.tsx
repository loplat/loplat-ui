import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Help, { HelpProps } from './index';

export default {
  title: 'Components/Help',
  component: Help,
} as ComponentMeta<typeof Help>;

const Template: ComponentStory<typeof Help> = (args: HelpProps) => <Help {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '샘플 텍스트입니다.',
  text: '풀밭에 싸인 청춘을 끝에 듣기만 하여도 만물은 그들은 것이다. 이상은 소금이라 든 풀밭에 있는가?',
};
