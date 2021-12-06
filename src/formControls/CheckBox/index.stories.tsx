import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckBox, CheckBoxProps } from './index';

export default {
  title: 'formControls/CheckBox',
  component: CheckBox,
  argTypes: {
    checked: {
      options: [true, false, 'checked', 'unchecked', 'intermediate'],
      controls: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args: CheckBoxProps) => {
  return <CheckBox {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: '체크박스',
  name: 'testBox',
};
