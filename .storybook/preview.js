export const parameters = {
  viewMode: 'docs',
  options: {
    showPanel: true,
    storySort: {
      order: [
        'Welcome',
        'core',
        ['colors', 'palette', 'decorator'],
        'Typography',
        'Components',
        ['Button', 'Input', 'Checkbox', 'RadioButton', 'Popup', ['Popup1', 'Popup2']],
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
