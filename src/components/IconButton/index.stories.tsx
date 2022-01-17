import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton, IconButtonProps } from './index';
import { CampaignIcon } from '../../assets/Icon';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    color: {
      options: ['default', 'primary1', 'primary2', 'danger1', 'danger2', 'solid', 'white'],
      control: {
        type: 'radio',
      },
    },
    icon: {
      control: {
        type: 'null',
      },
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args: IconButtonProps) => (
  <IconButton {...args}>
    <CampaignIcon />
  </IconButton>
);

export const Default = Template.bind({});
Default.args = {
  color: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary1',
};
export const Primary2 = Template.bind({});
Primary2.args = {
  color: 'primary2',
};
export const Ghost = Template.bind({});
Ghost.args = {
  color: 'ghost',
};
