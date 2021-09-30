import { ComponentStory, ComponentMeta } from '@storybook/react';

import { toast } from './index';
import { Toaster } from './index';
import Button from '../Button';

export default {
  title: 'Components/Toast',
  component: Toaster,
} as ComponentMeta<typeof Toaster>;

const Template: ComponentStory<typeof Toaster> = (args) => (
  <div>
    <Toaster {...args} />
    <Button onClick={() => toast.success('message')}>success</Button>
    <Button onClick={() => toast.info('message')}>info</Button>
    <Button onClick={() => toast.danger('message')}>danger</Button>
    <Button onClick={() => toast.white('message')}>white</Button>
    <Button onClick={() => toast.warning('message')}>warning</Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
