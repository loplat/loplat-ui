import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton, IconButtonProps } from './index';
import { CampaignIcon } from '../../assets/Icon';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    color: {
      options: ['default', 'primary1', 'primary2', 'danger1', 'danger2', 'solid', 'white'],
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args: IconButtonProps) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <CampaignIcon />,
};

export const Primary = Template.bind({});
Primary.args = {
  icon: <CampaignIcon />,
  color: 'primary1',
};
export const Primary2 = Template.bind({});
Primary2.args = {
  icon: <CampaignIcon />,
  color: 'primary2',
};
export const White = Template.bind({});
White.args = {
  icon: <CampaignIcon />,
  color: 'white',
};
