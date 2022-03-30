import button from '../../storybook-props/button';

const required = {
  type: {
    required: 'true',
  },
};

export const popup = {
  description: {
    description: 'title 로는 부족한 설명을 덧붙일 수 있습니다.',
  },
  isOpen: {
    description: '',
    type: {
      summary: 'boolean',
      required: 'true',
    },
    control: 'null',
  },
  label: {
    ...required,
    description: 'title과 동일하거나, 해당 컴포넌트의 목적을 간략히 입력해주세요. dialog의 aria-label역할을 합니다.',
    control: 'text',
  },
  content: {
    ...required,
    description: '`popup 컴포넌트`가 왜 켜졌는지를 사용자에게 설명합니다.',
    table: {
      defaultValue: { summary: '' },
    },
    control: 'text',
  },
  title: {
    ...required,
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
    control: {
      type: 'radio',
    },
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
    return {
      [label]: {
        ...required,
        table: { ...category, type: { summary: 'string' } },
        control: 'text',
      },
    };
  }
  if (label.endsWith('Color')) {
    return {
      [label]: {
        ...required,
        description: '버튼의 색상입니다. `loplat ui`의 `<Button/>`의 색상을 사용합니다',
        table: { ...category },
        options: button.color.options,
      },
    };
  }
  if (label.endsWith('Click')) {
    return {
      [label]: {
        ...required,
        description: '버튼의 onClick 이벤트를 할당합니다.',
        table: { ...category, type: { summary: '() => void' } },
        control: { type: 'null' },
      },
    };
  }
};

export const twoButtonsDescription = keyList.reduce((acc, curr) => {
  return Object.assign(acc, describeButton(curr));
}, {});
