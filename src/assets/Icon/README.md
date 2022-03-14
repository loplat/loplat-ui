# Icon

svg를 아이콘 컴포넌트로 만듭니다.

## 사용 방법

1. `src/assets/Icon/svgs` 에 추가 혹은 대체할 svg 파일을 넣어주세요.
2. svg 파일명은 `snake_case` 를 준수해주세요.
3. `yarn icon` 을 실행해주세요.
4. `src/assets/Icon/svgs` 폴더 안에 있는 svg파일들을 기준으로 `src/assets/Icon/generated` 에 생성됩니다.

## 명령어 설명

`yarn icon` 명령어는 아래의 단계를 차례로 실행합니다.

1. svgr을 이용하여 svg 파일을 tsx 파일으로 생성합니다.
2. 생성된 tsx파일들을 한군데서 모아서 export 하는 `exported.generated.ts` 파일을 생성합니다.
3. `svg path id collision` 문제를 해결하기 위해 svg 마다 `uniqueId`를 부여합니다.
   svgr에서 이 문제에 대한 해결법을 제공해주지 않습니다. [문제보기](https://github.com/gregberge/svgr/issues/150)
4. `prettier --write` 를 통해 스타일 포맷팅합니다.

---

# Icon

Please follow below steps to make `svg file` into `Icon component` for `loplat-ui`.

## How to generate `Icon` components

1. Move new `svg files` which is wanted to be added or replaced into `scr/assets/Icon/svgs` folder.
2. You should follow the `snake_case` convention to `svg` files.
3. Run `yarn icon`.
4. The all svg files in `src/assets/Icon/svgs` will replace the existing components files in `src/assets/Icon/generated`

### Description

The command `yarn icon` will execute following steps in order.

1. The new `Icon component` files will be generated in `src/assets/Icon/generated` by `svgr` based on all svg files in `src/assets/Icon/svgs`.
2. One file named `exported.generated.ts` will be generated to export all the newly generated `Icon component` files.
3. Every `Icon component` will have `uniqueId` to fix a `svg path id collision` bug, which `svgr` doesn't give any solutions yet. [to see the issue](https://github.com/gregberge/svgr/issues/150)
4. Format styles using `prettier --write`.
