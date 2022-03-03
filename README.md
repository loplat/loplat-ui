# loplat UI 🚀

A React-based UI Component Library, powered by loplat Frontend Team.

## Installation
```sh
// with yarn
yarn add loplat-ui

// with npm
npm install loplat-ui
```

## Usage
```jsx
import React from 'react';
import { Button } from 'loplat-ui';

function Example() {
  return (
    <Button>Hello world!</Button>
  )
}
```

## Documentation & Demo
Check out our [storybook website](https://loplat-ui.web.app/).

## Config
If you want to use loplat-ui with Next.js, add configuration as below.
```js
// next.config.js
const withTM = require('next-transpile-modules')(['loplat-ui']);

module.exports = {
  ...withTM({}),
};
```

## Changelog
If you have recently updated, please read the [changelog](https://github.com/loplat/loplat-ui/blob/main/CHANGELOG.md) for details of what has changed.

## Roadmap
- Storybook Addon Interactions
- D3.js Charts
- Popup

## License
This project is licensed under the terms of the [MIT license](https://github.com/loplat/loplat-ui/blob/main/LICENSE).
