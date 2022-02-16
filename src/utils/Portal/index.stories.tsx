import React, { useState, useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Portal, PortalProps } from './index';
import { Button } from '../../components/Button';
import { Headline } from '../../core/Typography/Headline';

export default {
  title: 'Utils/Portal',
  component: Portal,
} as ComponentMeta<typeof Portal>;

const Template: ComponentStory<typeof Portal> = (args: PortalProps) => {
  const container = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <Button onClick={toggle}>Toggle Portal</Button>
      <Headline weight="regular">Main</Headline>
      <div id="parent" ref={container} />
      {show && (
        <Portal container={container.current}>
          <Headline weight="bold">Portal</Headline>
        </Portal>
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
