export const parameters = {
  options: {
    storySort: {
      order: ['core', 'Typography', 'Components', ['Button', 'Input', 'Checkbox', 'RadioButton']],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
