import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toast, toast } from './index';
import { Button } from '../Button';

export default {
  title: 'Components/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = () => {
  return (
    <div>
      <Toast />
      <Button
        color="primary2"
        onClick={() =>
          toast.success(
            '긴 텍스트 긴 텍스트 긴 텍스트 긴 텍스트 긴 텍스트 긴 텍스트 긴 텍스트 긴 텍스트 긴 텍스트 긴 텍스트',
          )
        }
        my={4}
      >
        Success
      </Button>
      <Button color="primary1" onClick={() => toast.info('짧은 텍스트')} my={4}>
        Info
      </Button>
      <Button color="danger2" onClick={() => toast.danger('짧은 텍스트')} my={4}>
        Danger
      </Button>
      <Button color="danger1" onClick={() => toast.warning('짧은 텍스트')} my={4}>
        Warning
      </Button>
      <Button color="default" onClick={() => toast.white('짧은 텍스트')} my={4}>
        White
      </Button>
    </div>
  );
};

export const Default = Template.bind({});
