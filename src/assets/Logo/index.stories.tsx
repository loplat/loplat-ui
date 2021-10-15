
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LogoProps } from './index';
import { LoplatLogo, LoplatILogo, LoplatXLogo } from './index';

const LogoDocument = (props: LogoProps) => {
  return (
    <>
      <LoplatLogo {...props} />
      <LoplatILogo {...props} />
      <LoplatXLogo {...props} />
    </>
  );
};

export default {
  title: 'Logo',
  component: LogoDocument,
} as ComponentMeta<typeof LogoDocument>;

const Template: ComponentStory<typeof LogoDocument> = (args: LogoProps) => <LogoDocument {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 32,
};

