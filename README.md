<div align="center">

<a href="https://loplat.com/" rel="noopener" target="_blank">
  <img width="150" src="https://loplat.com/images/loplat-logo.png" alt="loplat logo">
</a>

<h1>loplat UI</h1>

A React UI Component Library, powered by loplat Frontend Team.

[![license](https://badgen.net/github/license/loplat/loplat-ui)](https://github.com/loplat/loplat-ui/blob/main/LICENSE)
[![license](https://badgen.net/npm/v/loplat-ui)](https://www.npmjs.com/package/loplat-ui)
[![license](https://badgen.net/bundlephobia/minzip/loplat-ui)](https://bundlephobia.com/package/loplat-ui)
[![license](https://badgen.net/npm/types/loplat-ui)](https://www.npmjs.com/package/loplat-ui)
[![license](https://badgen.net/bundlephobia/tree-shaking/loplat-ui)](https://bundlephobia.com/package/loplat-ui)
[![license](https://badgen.net/npm/dt/loplat-ui)](https://www.npmjs.com/package/loplat-ui)

</div>

## Installation

```sh
// with yarn
yarn add loplat-ui

// with npm
npm install loplat-ui
```

## Usage

### Getting Started

```jsx
import React from 'react';
import { Button } from 'loplat-ui';

function Example() {
  return <Button>Hello world!</Button>;
}
```

### Styling Components

All the loplat UI components are styled with `@emotion`.

If you'd like to change the styles of loplat UI components, you must use `styled` API provided by either `loplat-ui` or `@emotion/styled`.

`styled` API provided by other CSS-in-JS libraries will not work as expected.

```jsx
import { Button, styled } from 'loplat-ui';

const StyledButton = styled(Button)`
  color: red;
`;

function Example() {
  return <StyledButton>Hello world!</StyledButton>;
}
```

## Documentation & Demo

Check out our [storybook website](https://ui.loplat.com/).

## Changelog

If you have recently updated, please read the [changelog](https://github.com/loplat/loplat-ui/blob/main/CHANGELOG.md) for details of what has changed.

## Roadmap

- D3.js Charts

## License

This project is licensed under the terms of the [MIT license](https://github.com/loplat/loplat-ui/blob/main/LICENSE).
