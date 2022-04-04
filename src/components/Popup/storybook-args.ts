import { button, defaultValue, required } from '../../storybook-props';

export const description = {
  description: {
    description: 'title 로는 부족한 설명을 덧붙일 수 있습니다.',
  },
};

export const popup = {
  isOpen: {
    ...required('boolean'),
    control: 'null',
  },
  content: {
    ...required('string | React.ReactElement'),
    description: '`popup 컴포넌트`가 왜 켜졌는지를 사용자에게 설명합니다.',
    table: {
      ...defaultValue(''),
    },
    control: 'text',
  },
  title: {
    ...required('string'),
    description: '`popup 컴포넌트`가 왜 켜졌는지를 사용자에게 설명합니다.',
    control: 'text',
  },
  onClose: {
    description: '`popup 컴포넌트`를 닫을 수 있는 함수여야 합니다.',
    type: {
      required: 'true',
      category: 'event handler',
    },
    control: 'null',
  },
};

export const popupIcon = {
  icon: {
    table: {
      category: 'icon',
      type: {
        summary: '`check`, `warning`, `React.ReactElement`',
        detail: '`loplat ui`의 아이콘을 사용할 것을 권장합니다.',
      },
      defaultValue: { summary: 'check' },
    },
    description:
      '`<Popup/>`의 상단정중앙 아이콘을 `check`, `warning`으로 정해진 아이콘을 설정하거나 직접 아이콘을 주입할 수 있습니다.',
    options: ['check', 'warning'],
    control: 'radio',
  },
};

const twoButton = ['leftButton', 'rightButton'] as const;
const buttonProps = ['label', 'click', 'color'] as const;
const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.substring(1);
const keyList = twoButton.reduce(
  (prev, curr) => prev.concat(buttonProps.map((prop) => `${curr}${capitalize(prop)}`)),
  [] as string[],
);

const describeButton = (label: string) => {
  const category = { category: 'button props' };
  if (label.endsWith('Label')) {
    const defaultLabel = label.startsWith('left') ? '취소' : '확인';
    return {
      [label]: {
        table: { ...category, type: { summary: 'string' }, ...defaultValue(defaultLabel) },
        control: 'text',
      },
    };
  }
  if (label.endsWith('Color')) {
    const defaultLabel = label.startsWith('left') ? 'default' : 'primary';
    return {
      [label]: {
        description: '버튼의 색상입니다. `loplat ui`의 `<Button/>`의 색상을 사용합니다',
        table: { ...category, ...defaultValue(defaultLabel) },
        options: button.color.options,
        control: button.color.control,
        type: {
          summary: button.color.options,
        },
      },
    };
  }
  if (label.endsWith('Click')) {
    return {
      [label]: {
        ...required(),
        description: '버튼의 onClick 이벤트를 할당합니다.',
        table: { ...category, type: { summary: '() => void' } },
        control: 'null',
      },
    };
  }
};

export const twoButtonsDescription = keyList.reduce((acc, curr) => {
  return Object.assign(acc, describeButton(curr));
}, {});
