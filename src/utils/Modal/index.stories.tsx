import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal, ModalProps } from './index';
import { Help } from '../../components/Help';
import { Button } from '../../components/Button';

export default {
  title: 'Utils/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={toggle}>Open Modal</Button>
      <Modal open={open} onClose={close}>
        <Help
          title="샘플 텍스트입니다."
          text="풀밭에 싸인 청춘을 끝에 듣기만 하여도 만물은 그들은 것이다. 이상은 소금이라 든 풀밭에 있는가?"
        />
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
