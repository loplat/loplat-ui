import { borderless, disabled } from './';

export const button = {
  ...borderless,
  ...disabled('button'),
  variant: {
    description: '버튼의 색상을 결정합니다.',
    options: ['primary1', 'primary2', 'danger1', 'danger2', 'solid', 'ghost1', 'ghost2'],
    control: 'select',
    defaultValue: 'primary1',
  },
};
