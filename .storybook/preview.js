export const parameters = {
  viewMode: 'docs',
  options: {
    showPanel: true,
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
    expanded: true,
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
