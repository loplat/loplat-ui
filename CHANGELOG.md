# 1.5.1 (2022-03-08)

## Breaking changes
- cjs와 esm 형식이 동시에 지원됩니다.
  - Jest에서 ESM을 지원하기 위한 추가 설정이 필요 없어졌습니다.
  - Next.js에서 ESM을 지원하기 위한 추가 설정이 필요 없어졌습니다.

## Docs
- README 상단에 loplat Logo와 package 정보가 담긴 Badge를 추가했습니다.
- README에 Styling Components 가이드를 추가했습니다.


# 1.5.0 (2022-03-04)

## Breaking changes
- [github](https://github.com/loplat/loplat-ui/) 으로 loplat UI 프로젝트를 public하게 공개했습니다.
- [storybook](https://loplat-ui.web.app/) 으로 각 컴포넌트에 대한 설명과 사용법을 문서화했습니다.

## Removed
- Help 컴포넌트를 삭제했습니다.

## Fixed
- Input의 사용성을 개선했습니다.
  - HTML input tag의 기본 속성 일부와 aria-* 속성을 추가했습니다.
  - ref 속성을 사용할 수 있도록 forwardRef를 적용했습니다.
  - 불필요한 div tag를 제거했습니다.
  - onEnter prop을 onKeyPress로 교체했습니다.
- RadioButton에 isChecked prop을 추가했습니다.
- Circle Icon의 이름을 camelCase로 수정했습니다.

---

# 1.4.0 (2022-02-16)

## Added
- utils
  - Portal 컴포넌트를 추가했습니다.
  - Modal 컴포넌트를 추가했습니다.
- styles
  - styled API를 추가했습니다. ```import { styled } from 'loplat-ui';```를 통해 import 가능합니다.
  - transparent color를 추가했습니다.
- a11y
  - Aria system prop을 추가했습니다.
  - Button 컴포넌트에 aria-*, role prop을 추가했습니다.
  - toast 함수에 role parameter를 추가했습니다. ```toast.success('message', 'alert')```와 같이 사용가능합니다.

## Removed
- layout 관련 컴포넌트(Grid, Row, Col)를 삭제했습니다.

## Fixed
- Spinner
  - 브라우저에 따라 webp 형식의 이미지를 지원하도록 개선했습니다.
- Toast
  - duration, gap, marginSpacing prop을 추가했습니다.
- Button
  - borderless prop을 추가했습니다.
  - ghost의 theme의 배경색을 transparent로 수정했습니다.
  - outline css 속성을 삭제했습니다.
  - text가 중앙 정렬되도록 수정했습니다.
- Checkbox
  - 체크 표시를 이미지 파일이 아닌 css를 이용하여 그리도록 변경했습니다.
  - 키보드 조작이 가능하도록 input css의 display 속성을 제거했습니다.
  - 컴포넌트명을 CheckBox에서 Checkbox로 변경했습니다.
- RadioButton
  - 체크 표시가 중앙 정렬되도록 수정했습니다.
- Help
  - background, border color를 수정했습니다.


# 1.3.3 (2022-01-14)

## Renewal
- color와 palette의 색상과 이름을 대폭 수정했습니다.
  - palette scss 파일은 ```@import '~loplat-ui/core/styles/index.scss';``` 를 통해 import 가능합니다.
- Toast를 react-hot-toast 라이브러리에서 자체 제작 컴포넌트로 대체했습니다.

## Fixed
- Button의 prop, style을 수정했습니다.
  - fullWidth 로직을 size 로직과 분리했습니다.
  - Size에 'md' option을 추가했습니다.
  - color option 중 'white'를 'ghost'로 변경했습니다. 
- Typography의 fit-width 속성을 제거히고, Checkbox에 fit-width 속성을 추가했습니다.
- Typography의 불필요한 default css 속성들을 제거했습니다.
- Input의 layout 관련 css를 수정했습니다.
- Logo 이미지의 비율과 실제 svg 파일의 비율이 일치하지 않는 현상을 수정했습니다.


# 1.2.4 (2021-12-17)

## Added
- 25종류의 Icon이 추가되었습니다.
 
## Fixed
- Storybook에 font-family를 적용했습니다.
- Icon의 id를 고정시킬 수 있도록 suffixForId prop을 추가했습니다.
- @emotion/react package가 충돌하여 console warning이 일어나는 현상을 수정했습니다.


# 1.2.3 (2021-12-11)

## Added
- Spacing system prop을 추가했습니다.
  - mx, my, pl, pr 등의 spacing prop으로 margin과 padding값을 정할 수 있습니다.
  - Typography(margin, padding)와 Button(margin)에서 spacing prop을 사용할 수 있습니다.

## Fixed
- Typography 사용법을 대폭 수정했습니다.
  - Body1, Body2, Headline1, Headline2, Caption1 등의 컴포넌트를 Body, Headline, Caption으로 통일했습니다.
  - tag prop으로 Typography의 HTML Tag를 지정할 수 있습니다.
- Input의 id가 동적으로 변하는 버그를 수정했습니다.
- Badge, Button, RadioButton의 style 관련 버그를 수정했습니다.


# 1.2.2 (2021-12-01)

## Fixed
- 동일한 Icon을 두 번 이상 사용할 시 id collision이 일어나는 현상을 수정했습니다. 
- palette 색상을 대폭 수정했습니다.
- Button과 IconButton의 style을 수정했습니다.
  - height를 강제하지 않고 padding과 내용으로 높이를 결정합니다.
  - Icon svg의 색깔이 연하게 나타나는 버그를 수정했습니다.


# 1.2.1 (2021-11-19)

## Breaking changes
- tree shaking을 통해 bundle 용량을 최적화했습니다.
  - 기존 ```import { Button } from 'loplat-ui';```으로 import 했을 때, tree shaking이 되지 않아 import cost 가 너무 큰 문제를 해결했습니다.
  - 이제 ```import { Button } from 'loplat-ui';```으로 똑같이 import 했을 때, Button 에 해당하는 코드만 import 가능합니다.
  - tree shaking을 위해 esModule을 사용합니다. esModule을 인식하지 못하는 프레임워크(ex> Next.js)는 추가적인 Babel 설정이 필요합니다.(ex> next-transpile-modules)

## Fixed
- Help의 maxWidth prop을 optional하게 변경했습니다.
- Input의 rightIcon position 관련 css를 수정했습니다.
 

# 1.2.0 (2021-11-17)

## Breaking changes
- code splitting을 통해 bundle 용량을 최적화했습니다.
  - 기존 ```import { Button } from 'loplat-ui';``` 으로 import 했을 때, import cost 가 너무 큰 문제를 해결했습니다.
  - 이제 ```import { Button } from 'loplat-ui/core/Button';``` 으로 import 가능합니다. 

## Docs
- 배포 방법과 폴더 구조에 대한 README가 추가되었습니다.
- Logo를 generate하는 방법에 대한 README가 추가되었습니다.

## Added
- palette.scss
  - ```'loplat-ui/core/Palette/index.scss'``` 으로 import 가능합니다.

## Fixed
- Input의 autoComplete prop 오타를 수정했습니다.
- Input에 rightIcon prop이 추가되었습니다.
- Toast 양 옆 빈 공백이 클릭되지 않는 버그를 수정했습니다.
- Button css를 수정했습니다.
  - Desktop에서 pointer cursor를 적용했습니다.
  - Desktop에서만 hover style이 나타나도록 수정했습니다.
- Spinner 이미지의 용량을 줄였습니다.
  - 안드로이드 기기에서 이미지가 잘리는 문제를 해결했습니다.


# 1.1.3 (2021-11-03)

## Fixed
- Toast 에 padding과 box-sizing을 적용했습니다.


# 1.1.2 (2021-11-03)

## Fixed
- Spinner에 스크롤바가 생기는 버그를 수정했습니다.
- circle spinner의 이미지를 교체했습니다.


# 1.1.1 (2021-11-02)

## Fixed
- Spinner 컴포넌트 폴더구조를 변경했습니다.
- Spinner 컴포넌트를 export 했습니다.


# 1.1.0 (2021-11-02)

## Added
- Spinner 컴포넌트

## Fixed
- Input에 autocomplete을 추가하였습니다.
- Cheveron 아이콘 오타를 수정하였습니다.
- 스토리북에서 아이콘의 이름을 확인할 수 있습니다.


# 1.0.0 (2021-11-02)

npm 배포방식이 기존 google artifacts 에서 Npm public로 변경됨에 따라 새롭게 1.0.0으로 정의합니다.
기존 1.0.14까지의 내용이 1.0.0에 모두 반영되어 있습니다.

---

# 1.0.14 (2021-11-01)

## Fixed
- Input에 OnBlur, onFocus를 추가하였습니다.


# 1.0.13 (2021-10-22)

## Fixed
- Button의 top, bottom padding을 삭제하였습니다.


# 1.0.12 (2021-10-22)

## Fixed
- Typo의 `font-family: inherit` 옵션을 삭제하였습니다.


# 1.0.11 (2021-10-21)

## Fixed
- Input props에 type을 추가,
- Input 에 fullWidth가 안되는 버그 수정
- Caption의 size가 고정되어있는 버그 수정
- Caption의 태그를 div에서 small 로 수정


# 1.0.10 (2021-10-21)

## Fixed
- Typography의 width가 fit-content로 수정되었습니다.


# 1.0.9 (2021-10-21)

## Added
- IconButton

## Fixed
- Typography Headline에 font-weight를 weight prop으로 지정할 수 있습니다.
- row, col의 간격을 gap prop으로 지정할 수 있습니다.


# 1.0.4 (2021-10-14)

## Fixed
- Badge, Button, Help, Input, Col, Grid, Row, RadioButton이 import 불가능한 상황


# 1.0.0 (2021-10-14)

## Added
- Icon
- Badge
- Button
- Help
- Input
- Toast
- RadioButton
- Typography
  - Headline1
  - Headline2
  - Headline3
  - Headline4
  - Body1
  - Body2
  - Body3
  - Caption1
- Layout
  - Col
  - Row
  - Grid
