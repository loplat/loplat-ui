const webpack = require('webpack');
const { merge } = require('webpack-merge');

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
    storyStoreV7: true,
  },
  webpackFinal: async (config) => {
    return merge(config, {
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30 * 1024,
          maxSize: 244 * 1024,
        },
      },
      performance: {
        hints: false,
        maxAssetSize: 244 * 1024,
        maxEntrypointSize: 500 * 1024,
      },
    });
  },
};
