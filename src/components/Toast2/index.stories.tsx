import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toast, toast } from './index';
import { Button } from '../Button';

export default {
  title: 'Components/Toast2',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = () => {
  return (
    <div>
      <Toast />
      <Button
        color="primary2"
        onClick={() => toast.success('successsafasdfasdfasdfsadfdsdafasdfasdfsdfdasfsdfasfasdfasdf')}
        my={4}
      >
        Success
      </Button>
      <Button color="primary2" onClick={() => toast.danger('danger')} my={4}>
        Danger
      </Button>
    </div>
  );
};

export const Default = Template.bind({});
