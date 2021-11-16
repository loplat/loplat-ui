# Loplat UI 🚀

A React-based UI Component Library, powered by Loplat Frontend Team.


## Install
```bash
yarn add loplat-ui

npm install loplat-ui
```

## Starts with Storybook
```bash
yarn storybook
```

## Test
```bash
yarn test
```

## Build

```bash
yarn build
```

## Build Storybook
어느 브랜치에 push를 하시든 자동으로 pipeline을 통해 storybook이 배포됩니다.
부득이하게 로컬에서 배포해야하는 상황에만 사용해주세요.
```bash
yarn build-storybook
```

## Publish Storybook
```bash
yarn publish-storybook
```


## Before Deployment
contribute를 하기 위해서는 npmjs.com 에서 loplat Organization 자격을 얻어야 합니다.

순서는 다음과 같습니다.
package.json에서 버전업을 한 후, build 합니다.
이후 changelog.md에 업데이트 내용을 기재합니다. 그리고 배포합니다.

반드시 배포 전에는 모든 테스트 코드를 꼭 통과해야합니다.

```bash
npm login
```

## Deploy

```bash
npm publish
```

---

## Structure
- **assets**; 정적 요소를 리액트로 wrapping만 한 컴포넌트.
- **core**: 직접 시각화 되는 ui는 아니지만, 필수적으로 있어야 하는 컴포넌트.
- **formControl**: form 태그 관련한 컴포넌트.
- **components**: 그 외 컴포넌트.
