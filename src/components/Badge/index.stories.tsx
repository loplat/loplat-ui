import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge, BadgeProps } from './index';

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args: BadgeProps) => <Badge {...args} />;

export const Pill = Template.bind({});
Pill.args = {
  type: 'pill',
  color: 'danger',
  text: 'badge',
};

export const Round = Template.bind({});
Round.args = {
  type: 'round',
  color: 'danger',
  text: 'badge',
};

export const New = Template.bind({});
New.args = {
  type: 'pill',
  color: 'new',
  text: 'N',
  variant: 'filled',
  size: 'small',
};
