import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RadioButton, RadioButtonProps } from './index';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const RadioButtonGroup = (props: { name: string }): JSX.Element => {
  const values = [
    '테스트1',
    '테스트2',
    '테스트3',
    '테스트4',
    '테스트5 - disabled & checked',
    '테스트6 - disabled & non-checked',
  ];
  const [selected, setSelected] = useState(values[4]);

  return (
    <form>
      {values.map((value) => (
        <RadioButton
          isChecked={selected === value}
          value={value}
          onChange={setSelected}
          name={props.name}
          disabled={value === values[4] || value === values[5]}
        >
          {value}
        </RadioButton>
      ))}
    </form>
  );
};

const Template: ComponentStory<typeof RadioButton> = (args: RadioButtonProps) => <RadioButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'test',
};
