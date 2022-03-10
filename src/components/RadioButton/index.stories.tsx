import React, { useState } from 'react';
import { RadioButton, RadioButtonProps } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { runTest } from './storybookTest';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  excludeStories: ['radioValues'],
} as ComponentMeta<typeof RadioButton>;

export const radioValues = [
  '테스트1',
  '테스트2',
  '테스트3',
  '테스트4',
  '테스트5 - disabled & checked',
  '테스트6 - disabled & non-checked',
];

const RadioButtonGroup = (props: { name: string }): JSX.Element => {
  const [selected, setSelected] = useState(radioValues[4]);

  return (
    <form data-testid="loplat-ui__form">
      {radioValues.map((value) => (
        <RadioButton
          isChecked={selected === value}
          value={value}
          onChange={setSelected}
          name={props.name}
          disabled={value === radioValues[4] || value === radioValues[5]}
          key={value}
        >
          {value}
        </RadioButton>
      ))}
    </form>
  );
};

const Template: ComponentStory<typeof RadioButton> = (args: RadioButtonProps) => <RadioButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = { name: 'test' };
runTest(Default);
