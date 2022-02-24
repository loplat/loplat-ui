export const parameters = {
  viewMode: 'docs',
  options: {
    storySort: {
      order: [
        'Intro',
        'core',
        'Typography',
        'Components',
        ['Button', 'Input', 'Checkbox', 'RadioButton'],
        'Assets',
        'Utils',
      ],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    exclude: ['role'],
    sort: 'requiredFirst',
  },
  a11y: {
    config: {
      rules: [
        {
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
};
