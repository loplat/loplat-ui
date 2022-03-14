module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)', './welcome.jsx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
  ],
  features: {
    buildStoriesJson: true,
    interactionsDebugger: true,
  },
};
