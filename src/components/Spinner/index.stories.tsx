import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CubeSpinner, CircleSpinner, SpinnerProps } from './index';

const SpinnerDocument = (props: SpinnerProps) => {
  return (
    <>
      <CubeSpinner {...props} />
      <CircleSpinner {...props} />
    </>
  );
};

export default {
  title: 'Components/Spinner',
  component: SpinnerDocument,
} as ComponentMeta<typeof SpinnerDocument>;

const Template: ComponentStory<typeof SpinnerDocument> = (args: SpinnerProps) => <SpinnerDocument {...args} />;

export const Default = Template.bind({});
Default.args = {
  duration: 1000,
  scale: 1,
  zIndex: 1,
};
