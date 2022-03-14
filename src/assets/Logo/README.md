# Logo

## 문제

모두 동일한 사이즈를 가진 `icon` 파일과 다르게 `logo`는 각각 다른 사이즈를 가지고 있습니다.
그래서 `icon`처럼 *자동으로 컴포넌트 파일들을 생성하기*가 어렵습니다.

## 사용 방법

1. `src/assets/Logo/svgs` 에 추가 혹은 대체할 `svg`파일을 넣어주세요.
2. `yarn logo` 명령어를 사용합니다.
3. 실제 로고 사이즈에 맞게 컴포넌트를 **직접 수정**해주세요.
   `<svg>`tag의 `height`, `viewBox` 속성만 **수정하시면** 됩니다.

### 명령어 설명

`yarn logo` 명령어는 아래의 단계를 차례로 실행합니다.

1. svgr을 이용하여 svg 파일을 tsx 파일으로 생성합니다.
2. 생성된 tsx파일들을 한군데서 모아서 export 하는 `exported.generated.ts` 파일을 생성합니다.
3. `prettier --write` 를 통해 스타일 포맷팅합니다.

---

# Logo

## Problem

Compare to `Icon` which has one same size, `logo` is hard to be generated automatically by one single command since `logo` has various size itself.

## How to generate `Logo` components

Please follow bellow steps to make `svg file` into `Logo component` for `loplat-ui`.

1. Move your new logo svg files into `src/assets/Logo/svgs`
2. Run `yarn logo`. The new logo components will be generated into `src/assets/Logo/generated` folder.
3. **You must adjust the size** to match sizes of the origin logo, one by one.
   The `height`, `viewBox` properties of svg should be fixed.

### Description

The command `yarn logo` will execute following steps in order.

1. The new `Logo component` files will be generated in `src/assets/Logo/generated` by `svgr` based on all svg files in `src/Assets/Logo/svgs`.
2. One file named `exported.generated.ts` will be generated to export all the newly generated `Logo component` files.
3. Format styles using `prettier --write`.
