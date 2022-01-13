import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonProps } from './index';
import { Alert } from '../../assets/Icon/generated/Alert';
import { black300, blue500, danger300, white } from '../../core/Palette';
import { css } from '@emotion/css';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['default', 'primary1', 'primary2', 'danger1', 'danger2', 'solid', 'white'],
      control: {
        type: 'radio',
      },
    },
    rightIcon: {
      control: {
        type: 'null',
      },
    },
    leftIcon: {
      control: {
        type: 'null',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div>
      <Button {...args} my={4} size="xs">
        파란
      </Button>
      <Button {...args} my={4} size="sm">
        파란 묻힌
      </Button>
      <Button {...args} my={4} size="md">
        파란 묻힌 계절이
      </Button>
      <Button {...args} my={4} size="lg">
        파란 묻힌 계절이 동경과 언덕 덮어 된 이름자 있습니다.
      </Button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const DefaultWithClassName = Template.bind({});
DefaultWithClassName.args = {
  className: css`
    box-shadow: 0 2px 12px 0 rgba(64, 166, 253, 0.3);
  `,
};

export const Primary1 = Template.bind({});
Primary1.args = {
  color: 'primary1',
  onClick: () => alert('click!'),
};

export const Primary2 = Template.bind({});
Primary2.args = {
  color: 'primary2',
  onClick: () => alert('click!'),
};

export const Danger1 = Template.bind({});
Danger1.args = {
  color: 'danger1',
  onClick: () => alert('click!'),
};

export const Danger2 = Template.bind({});
Danger2.args = {
  color: 'danger2',
  onClick: () => alert('click!'),
};

export const Solid = Template.bind({});
Solid.args = {
  color: 'solid',
  onClick: () => alert('click!'),
};

export const White = Template.bind({});
White.args = {
  color: 'white',
  onClick: () => alert('click!'),
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  onClick: () => alert('click!'),
  leftIcon: <Alert />,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  onClick: () => alert('click!'),
  rightIcon: <Alert />,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  onClick: () => alert('click!'),
  leftIcon: <Alert />,
  rightIcon: <Alert />,
};

export const Primary1WithLeftIcon = Template.bind({});
Primary1WithLeftIcon.args = {
  color: 'primary1',
  onClick: () => alert('click!'),
  leftIcon: <Alert fillColor={white} />,
};

export const Primary1WithRightIcon = Template.bind({});
Primary1WithRightIcon.args = {
  color: 'primary1',
  onClick: () => alert('click!'),
  rightIcon: <Alert fillColor={white} />,
};

export const Primary1WithIcons = Template.bind({});
Primary1WithIcons.args = {
  color: 'primary1',
  onClick: () => alert('click!'),
  leftIcon: <Alert fillColor={white} />,
  rightIcon: <Alert fillColor={white} />,
};

export const DisabledPrimary1WithIcons = Template.bind({});
DisabledPrimary1WithIcons.args = {
  color: 'primary1',
  onClick: () => alert('click!'),
  disabled: true,
  leftIcon: <Alert fillColor={blue500} />,
  rightIcon: <Alert fillColor={blue500} />,
};

export const Primary2WithLeftIcon = Template.bind({});
Primary2WithLeftIcon.args = {
  color: 'primary2',
  onClick: () => alert('click!'),
  leftIcon: <Alert fillColor={blue500} />,
};

export const Primary2WithRightIcon = Template.bind({});
Primary2WithRightIcon.args = {
  color: 'primary2',
  onClick: () => alert('click!'),
  rightIcon: <Alert fillColor={blue500} />,
};

export const Primary2WithIcons = Template.bind({});
Primary2WithIcons.args = {
  color: 'primary2',
  onClick: () => alert('click!'),
  leftIcon: <Alert fillColor={blue500} />,
  rightIcon: <Alert fillColor={blue500} />,
};

export const DisabledPrimary2WithIcons = Template.bind({});
DisabledPrimary2WithIcons.args = {
  color: 'primary2',
  onClick: () => alert('click!'),
  disabled: true,
  leftIcon: <Alert fillColor={blue500} />,
  rightIcon: <Alert fillColor={blue500} />,
};

export const Danger1WithLeftIcon = Template.bind({});
Danger1WithLeftIcon.args = {
  color: 'danger1',
  onClick: () => alert('click!'),
  leftIcon: <Alert fillColor={white} />,
};

export const Danger1WithRightIcon = Template.bind({});
Danger1WithRightIcon.args = {
  color: 'danger1',
  onClick: () => alert('click!'),
  rightIcon: <Alert fillColor={white} />,
};

export const Danger1WithIcons = Template.bind({});
Danger1WithIcons.args = {
  color: 'danger1',
  onClick: () => alert('click!'),
  leftIcon: <Alert fillColor={white} />,
  rightIcon: <Alert fillColor={white} />,
};

export const DisabledDanger1WithIcons = Template.bind({});
DisabledDanger1WithIcons.args = {
  color: 'danger1',
  onClick: () => alert('click!'),
  disabled: true,
  leftIcon: <Alert fillColor={white} />,
  rightIcon: <Alert fillColor={white} />,
};

export const Danger2WithLeftIcon = Template.bind({});
Danger2WithLeftIcon.args = {
  color: 'danger2',
  onClick: () => alert('click!'),
  leftIcon: <Alert fillColor={danger300} />,
};

export const Danger2WithRightIcon = Template.bind({});
Danger2WithRightIcon.args = {
  color: 'danger2',
  onClick: () => alert('click!'),
  rightIcon: <Alert fillColor={danger300} />,
};

export const Danger2WithIcons = Template.bind({});
Danger2WithIcons.args = {
  color: 'danger2',
  onClick: () => alert('click!'),
  leftIcon: <Alert fillColor={danger300} />,
  rightIcon: <Alert fillColor={danger300} />,
};

export const DisabledDanger2WithIcons = Template.bind({});
DisabledDanger2WithIcons.args = {
  color: 'danger2',
  onClick: () => alert('click!'),
  disabled: true,
  leftIcon: <Alert fillColor={danger300} />,
  rightIcon: <Alert fillColor={danger300} />,
};

export const SolidWithLeftIcon = Template.bind({});
SolidWithLeftIcon.args = {
  color: 'solid',
  onClick: () => alert('click!'),
  leftIcon: <Alert fillColor={black300} />,
};

export const SolidWithRightIcon = Template.bind({});
SolidWithRightIcon.args = {
  color: 'solid',
  onClick: () => alert('click!'),
  rightIcon: <Alert fillColor={black300} />,
};

export const SolidWithIcons = Template.bind({});
SolidWithIcons.args = {
  color: 'solid',
  onClick: () => alert('click!'),
  leftIcon: <Alert fillColor={black300} />,
  rightIcon: <Alert fillColor={black300} />,
};

export const DisabledSolidWithIcons = Template.bind({});
DisabledSolidWithIcons.args = {
  color: 'solid',
  onClick: () => alert('click!'),
  disabled: true,
  leftIcon: <Alert fillColor={black300} />,
  rightIcon: <Alert fillColor={black300} />,
};

export const WhiteWithLeftIcon = Template.bind({});
WhiteWithLeftIcon.args = {
  color: 'white',
  onClick: () => alert('click!'),
  leftIcon: <Alert fillColor={blue500} />,
};

export const WhiteWithRightIcon = Template.bind({});
WhiteWithRightIcon.args = {
  color: 'white',
  onClick: () => alert('click!'),
  rightIcon: <Alert fillColor={blue500} />,
};

export const WhiteWithIcons = Template.bind({});
WhiteWithIcons.args = {
  color: 'white',
  onClick: () => alert('click!'),
  leftIcon: <Alert fillColor={blue500} />,
  rightIcon: <Alert fillColor={blue500} />,
};

export const DisabledWhiteWithIcons = Template.bind({});
DisabledWhiteWithIcons.args = {
  color: 'white',
  onClick: () => alert('click!'),
  disabled: true,
  leftIcon: <Alert fillColor={blue500} />,
  rightIcon: <Alert fillColor={blue500} />,
};
