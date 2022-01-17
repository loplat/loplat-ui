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
      <Toast mt={4} mx={4} />
      <Button
        color="primary2"
        onClick={() =>
          toast.success(
            '잔디가 별 흙으로 무엇인지 차 별 언덕 까닭입니다. 말 나는 한 밤이 어머니 헤는 까닭입니다. 하늘에는 내일 벌써 피어나듯이 사랑과 듯합니다. 청춘이 차 추억과 헤는 이름을 않은 봅니다. 내린 이름자 부끄러운 내 위에 때 했던 라이너 흙으로 계십니다.',
          )
        }
        my={4}
      >
        Success
      </Button>
      <Button
        color="primary1"
        onClick={() => toast.info('파란 묻힌 계절이 동경과 언덕 덮어 된 이름자 있습니다.')}
        my={4}
      >
        Info
      </Button>
      <Button
        color="danger2"
        onClick={() => toast.danger('파란 묻힌 계절이 동경과 언덕 덮어 된 이름자 있습니다.')}
        my={4}
      >
        Danger
      </Button>
      <Button
        color="danger1"
        onClick={() => toast.warning('파란 묻힌 계절이 동경과 언덕 덮어 된 이름자 있습니다.')}
        my={4}
      >
        Warning
      </Button>
      <Button
        color="default"
        onClick={() => toast.white('파란 묻힌 계절이 동경과 언덕 덮어 된 이름자 있습니다.')}
        my={4}
      >
        White
      </Button>
    </div>
  );
};

export const Default = Template.bind({});
