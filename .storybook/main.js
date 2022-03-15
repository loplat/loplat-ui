module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)', './welcome.jsx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-postcss',
    '@storybook/addon-interactions',
  ],
  features: {
    buildStoriesJson: true,
    interactionsDebugger: true,
  },
  webpackFinal: async (config) => {
    config.optimization.splitChunks = {
      ...config.optimization.splitChunks,
      chunks: 'all',
      minSize: 30 * 1024,
      maxSize: 244 * 1024,
    };
    config.performance = { ...config.performance, maxAssetSize: 500 * 1024, maxEntrypointSize: 500 * 1024 };
    return config;
  },
};
