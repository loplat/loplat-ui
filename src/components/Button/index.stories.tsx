import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonProps } from './index';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args}>테스트</Button>;

export const Default = Template.bind({});
Default.args = {};

export const Primary1 = Template.bind({});
Primary1.args = {
  color: 'primary1',
  onClick: () => alert('click!'),
};

export const Primary2 = Template.bind({});
Primary2.args = {
  color: 'primary2',
  onClick: () => alert('click!'),
};

export const Danger1 = Template.bind({});
Danger1.args = {
  color: 'danger1',
  onClick: () => alert('click!'),
};

export const Danger2 = Template.bind({});
Danger2.args = {
  color: 'danger2',
  onClick: () => alert('click!'),
};

export const Solid = Template.bind({});
Solid.args = {
  color: 'solid',
  onClick: () => alert('click!'),
};
