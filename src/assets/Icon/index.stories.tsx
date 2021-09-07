import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconProps } from './index';
import { Search } from './generated/Search';

const IconDocument = (props: IconProps) => {
  return (
    <>
      <Search {...props} />
    </>
  );
};

export default {
  title: 'Icon/Search',
  component: IconDocument,
} as ComponentMeta<typeof IconDocument>;

const Template: ComponentStory<typeof IconDocument> = (args: IconProps) => <IconDocument {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 32,
  fillColor: '#000000',
};
