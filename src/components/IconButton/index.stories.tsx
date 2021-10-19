import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton, IconButtonProps } from '../Button';
import { ImageIcon } from '../../assets/Icon';

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args: IconButtonProps) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <ImageIcon />,
};
