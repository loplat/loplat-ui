import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WarningCircleOutlineIcon } from '../../assets/Icon/index';
import { Input, InputProps } from './index';
import { danger } from '../../core/styles/palette';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => {
  const [value, setValue] = useState<string>('');

  return (
    <Input {...args} value={value} error={value.length > 10} onChange={(e) => setValue(e ? e.target.value : '')} />
  );
};
export const Default = Template.bind({});
Default.args = {
  placeholder: '10글자를 넘기면 에러가 발생할 수도 있어요!',
  errorMessage: '10글자를 넘으면 안됩니다!',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: '10글자를 넘기면 에러가 발생할 수도 있어요!',
  errorMessage: '10글자를 넘으면 안됩니다!',
  disabled: true,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  disabled: false,
  placeholder: '아이콘은 변경 가능합니다.',
  isIconVisible: true,
  rightIcon: <WarningCircleOutlineIcon fillColor={danger} size={30} />,
  error: true,
  errorMessage: '에러!',
};
