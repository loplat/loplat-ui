import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input, { InputProps } from './index';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => {
  const [value, setValue] = useState<string>('');
  return (
    <Input
      {...args}
      value={value}
      error={value.length > 10}
      onChange={(e) => setValue(e ? e.target.value : '')}
      onEnter={(e) => console.log('enter', e)}
    />
  );
};
export const Default = Template.bind({});
Default.args = {
  fullWidth: false,
  placeholder: '10글자를 넘기면 에러가 발생할 수도 있어요!',
  errorMessage: '10글자를 넘으면 안됩니다!',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  fullWidth: false,
  placeholder: '10글자를 넘기면 에러가 발생할 수도 있어요!',
  errorMessage: '10글자를 넘으면 안됩니다!',
  disabled: true,
};
