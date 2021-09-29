import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButton, { RadioButtonProps } from './index';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const RadioButtonGroup = (props: { name: string }): JSX.Element => {
  const [selected, setSelected] = useState('test5');
  console.log('selected', selected);
  return (
    <form>
      <RadioButton selected={selected} value={'test1'} onChange={setSelected} name={props.name}>
        테스트1
      </RadioButton>
      <RadioButton selected={selected} value={'test2'} onChange={setSelected} name={props.name}>
        테스트2
      </RadioButton>
      <RadioButton selected={selected} value={'test3'} onChange={setSelected} name={props.name}>
        테스트3
      </RadioButton>
      <RadioButton selected={selected} value={'test4'} onChange={setSelected} name={props.name}>
        테스트4
      </RadioButton>
      <RadioButton selected={selected} value={'test5'} onChange={setSelected} name={props.name} disabled>
        테스트5 - disabled & checked
      </RadioButton>
      <RadioButton selected={selected} value={'test6'} onChange={setSelected} name={props.name} disabled>
        테스트6 - disabled & non-checked
      </RadioButton>
    </form>
  );
};

const Template: ComponentStory<typeof RadioButton> = (args: RadioButtonProps) => <RadioButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'test',
};
