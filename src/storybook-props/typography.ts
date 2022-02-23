const typography = {
  textAlign: {
    description: 'text-align을 결정합니다',
    table: {
      category: 'font',
    },
  },
  color: {
    description: 'font color을 결정합니다',
    table: {
      category: 'font',
    },
  },
  weight: {
    description: 'font-weight을 결정합니다.',
    table: {
      category: 'font',
    },
  },
  size: {
    description: 'font-size를 결정합니다.',
    defaultValue: 'base',
    options: ['2xs', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', 1, 2, 3, 4, 5],
    control: {
      type: 'select',
    },
    table: {
      category: 'font',
      type: { summary: 'string | number', detail: 'number타입은 `rem`형식입니다.' },
    },
  },
  children: {
    description: '내용을 포함합니다.',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
};

export default typography;
