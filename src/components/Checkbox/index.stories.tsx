import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox, CheckboxProps } from './index';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      options: [true, false, 'checked', 'unchecked', 'intermediate'],
      controls: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => {
  return <Checkbox {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: '체크박스',
  name: 'testBox',
};

export const Intermediate = Template.bind({});
Intermediate.args = {
  label: '중간값',
  name: 'testBox',
  checked: 'intermediate',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: '중간값 + disabled',
  name: 'testBox',
  checked: 'intermediate',
  disabled: true,
};
