# 1.13.6

## Fixed

- tooltip의 `fullWidth` prop을 optional로 변경했습니다.

# 1.13.5

## Added

- tooltip의 Wrapper에 `fullWidth` prop을 추가했습니다.

# 1.13.4

## Fixed

- tooltip에 placement를 left로 주었을 경우, scrollY를 계산하지 않는 로직을 수정했습니다.

# 1.13.2

## Fixed

- Dropdown OptionList z-index를 기본 56으로 수정합니다.

# 1.13.0

## Added

- WarningCircleOutline 아이콘이 추가되었습니다.

# 1.12.8

## Fixed

- tooltip의 기본 z-index를 60으로 수정합니다.

# 1.12.7

## Fixed

- z index 계층화를 수정했습니다.
- X에 있는 Z index 계층에 맞춰서 작성했습니다.

# 1.12.5

## Added

- badge에서 props 추가, variant 등

# 1.12.2-3

## Added

- badge에서 props 추가, variant 등

# 1.12.1

## Added

- switch에서 높이 넓이 바꿀 수 있도록 수정

# 1.11.0-beta.1 (2023-07-17)

## Added

- client component 적용

## Fixed

- 라디오버튼그룹 컴포넌트 삭제
- 아코디언이 펼쳐지고 height:auto이 적용안되는 버그 수정
- 아코디언의 aria속성 삭제
- Popover컴포넌트 triggerType=hover일때, hover중일때만 hover이벤트가 발동되도록 수정
- modal 켜질때 애니메이션 적용
- 툴팁의 enterDelay가 적용되도, 호버상태일때만 툴팁이 뜨도록 수정

# 1.11.0 (2023-06-14)

## Added

- Collapse 가 추가되었습니다.
- Popover 가 추가되었습니다.
- background 색상을 추가했습니다.

## Fixed

- node version 규칙을 수정했습니다.
- Button
  - props 중 color 속성명을 variant로 변경했습니다.
- Popup
  - Popup1, Popup2, Popup3이 Popup 컴포넌트로 통합되었습니다.
- Modal
  - 배경 mask를 렌더링할지 말지를 구분하는 showMask 속성이 추가되었습니다.
- CircleLoading
  - stroke의 두께를 조절할 수 있습니다.
- Tooltip
  - 툴팁이벤트 trigger 방식을 수정했습니다.
  - disabled 속성을 추가했습니다.
- Dropdown
  - 키보드로 목록이동시, focus가 자연스럽지 못한 버그를 수정했습니다.
- blue, bluescale 색상이 수정되었습니다.
- Checkbox
  - label속성이 아닌 children속성으로 라벨을 구현하도록 수정했습니다.

# 1.10.2 (2023-02-09)

## Renewal

- loplat, loplat X 공식 로고가 새롭게 바뀌었습니다.

## Fixed

- Button
  - 모바일과 데스크탑에서 `focus-visible`, `hover` 스타일을 세분화했습니다.
- Dropdown
  - Custom Trigger의 `children`이 `input`일 경우 이벤트 처리 방식을 변경했습니다.
  - Dropdown.Bar에 `suffixForId` prop을 추가했습니다.
- Checkbox, Switch
  - React.forwardRef를 적용했습니다.

# 1.10.1 (2022-11-15)

## Fixed

- Button
  - `769px` 이상의 기기에서 `hover` style이 적용되도록 수정했습니다.
- `/core` 경로에 정상적으로 접근하지 못하는 현상을 수정했습니다.

# 1.10.0 (2022-11-08)

## Added

- [Switch](https://ui.loplat.com/?path=/docs/components-switch--default-story) 컴포넌트를 추가했습니다.
- loplat UI에서 사용하는 z-index 값들을 `zIndex` 변수로 분리했습니다.

## Fixed

- Tooltip
  - `web-animations-js` polyfill을 추가했습니다.
  - popper 영역에 마우스가 들어왔을 때, popper가 사라지지 않도록 개선했습니다.
  - 키보드 조작으로 tooltip에 접근할 수 있도록 개선했습니다.
- Accordion
  - `web-animations-js` polyfill을 추가했습니다.
  - `open` prop을 변경했을 때 애니메이션이 제대로 동작하지 않는 버그를 수정했습니다.
- Input
  - 기존 `errorMessage` prop을 `helperText` prop으로 확장했습니다.
  - `helperText`의 position을 `absolute`로 변경했습니다.

# 1.9.0 (2022-09-01)

## Added

- [Dropdown](https://ui.loplat.com/?path=/docs/components-dropdown--default-story) 컴포넌트를 추가했습니다.
  - Compound Components Pattern을 적용했습니다.

## Fixed

- TabList
  - `value` type에 Generic을 적용했습니다.
  - `variant` prop을 추가했습니다. `ellipse` 또는 `rectangle` 모양의 UI를 사용할 수 있습니다.
  - `fullWidth` prop을 추가했습니다.
- Checkbox
  - 키보드로 조작할 때 Click Event가 2번 발생하는 버그를 수정했습니다.
  - `onChange` prop을 optional로 변경했습니다.
- Tooltip
  - Web Animations API를 사용하여 애니메이션을 관리하도록 개선했습니다.

# 1.8.0 (2022-07-29)

## Added

- [Tooltip](https://ui.loplat.com/?path=/docs/components-tooltip--default-story) 컴포넌트를 추가했습니다.
- [TabList](https://ui.loplat.com/?path=/docs/components-tablist--default-story) 컴포넌트를 추가했습니다.

# 1.7.1 (2022-06-16)

## Renewal

- 이미지 기반 Spinner 컴포넌트를 SVG 기반 [Loading](https://ui.loplat.com/?path=/docs/components-loading-circle--default-story) 컴포넌트로 교체하여 용량을 최적화했습니다.

## Added

- [palette](https://ui.loplat.com/?path=/docs/core-palette--page) 를 storybook에서 확인할 수 있습니다.

## Fixed

- Typography 컴포넌트에 HTMLAttributes를 적용할 수 있습니다.

# 1.7.0 (2022-05-04)

## Added

- [Accordion](https://ui.loplat.com/?path=/docs/components-accordion--controlled) 컴포넌트를 추가했습니다.
- [RadioGroup](https://ui.loplat.com/?path=/docs/components-radiobutton-group--default-story) 컴포넌트를 추가했습니다.

## Fixed

- 아래 열거한 컴포넌트에 margin 속성을 추가했습니다.
  - Checkbox, RadioButton, Icon, Logo, Badge, Input
- Spinner 컴포넌트에 aria-\* 속성을 추가했습니다.

## Docs

- Spinner 컴포넌트에 aria-\* 속성을 추가하여 [접근성을 높일 수 있는 방법](https://ui.loplat.com/?path=/docs/components-loading-circle--default-story#접근성) 에 대해 추가 작성했습니다.
  - Spinner 컴포넌트가 특정 영역의 상태임을 알려주는 방법
  - Spinner 컴포넌트가 무엇을 기다리는 것인지 알려주는 방법
  - Spinner 컴포넌트에 진행상태 값을 제공하는 방법

# 1.6.0 (2022-04-06)

## Added

- Popup 컴포넌트를 추가했습니다.
  - [Popup1](https://ui.loplat.com/?path=/docs/components-popup-popup1--default-story), [Popup2](https://ui.loplat.com/?path=/docs/components-popup-popup2--default-story), [Popup3](https://ui.loplat.com/?path=/docs/components-popup-popup3--default-story) 로 나누어 3가지 상황에 대한 UI를 제공합니다.
- [highlight](https://ui.loplat.com/?path=/docs/core-decorator--highlight), [underline](https://ui.loplat.com/?path=/docs/core-decorator--underline) decorator style을 추가했습니다.

## Fixed

- Modal 컴포넌트에서 aria-hidden, aria-disabled, tabindex를 조작하여 접근성을 높였습니다.
- Toast 컴포넌트에 position prop을 추가했습니다.
- CheckBox, RadioButton 컴포넌트에 focus-visible style을 추가했습니다.
- Input, Checkbox 컴포넌트의 불필요한 div tag를 제거했습니다.
- Button, IconButton 컴포넌트에 모든 button HTMLAttributes를 적용할 수 있습니다.
- Button, IconButton 컴포넌트에 React.forwardRef를 적용했습니다.
- Spinner 컴포넌트에 `role="progressbar"` 속성을 추가했습니다.

## Test

- [Input](https://ui.loplat.com/?path=/story/components-input--default-story) 컴포넌트에 interactions 테스트를 추가했습니다.

## Docs

- [Storybook](https://ui.loplat.com) 데모 사이트의 URL을 `ui.loplat.com`으로 변경했습니다.
- spacing(margin/padding) system prop의 설명을 보충했습니다.

# 1.5.2 (2022-03-15)

## Test

- [Storybook Addon Interactions](https://storybook.js.org/addons/@storybook/addon-interactions) 를 이용한 테스트 코드를 추가했습니다.
  - [Button](https://ui.loplat.com/?path=/story/components-button-button--default-story), [RadioButton](https://ui.loplat.com/?path=/story/components-radiobutton--default) 컴포넌트의 interactions addon을 통해 테스트를 실행하고 디버깅할 수 있습니다.

## Docs

- README의 내용을 개선하고 영문 설명을 추가했습니다.
  - README.md
  - Icon/README.md
  - Logo/README.md

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
- [storybook](https://ui.loplat.com/) 으로 각 컴포넌트에 대한 설명과 사용법을 문서화했습니다.

## Removed

- Help 컴포넌트를 삭제했습니다.

## Fixed

- Input의 사용성을 개선했습니다.
  - HTML input tag의 기본 속성 일부와 aria-\* 속성을 추가했습니다.
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
  - styled API를 추가했습니다. `import { styled } from 'loplat-ui';`를 통해 import 가능합니다.
  - transparent color를 추가했습니다.
- a11y
  - Aria system prop을 추가했습니다.
  - Button 컴포넌트에 aria-\*, role prop을 추가했습니다.
  - toast 함수에 role parameter를 추가했습니다. `toast.success('message', 'alert')`와 같이 사용가능합니다.

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
  - palette scss 파일은 `@import '~loplat-ui/core/styles/index.scss';` 를 통해 import 가능합니다.
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
  - 기존 `import { Button } from 'loplat-ui';`으로 import 했을 때, tree shaking이 되지 않아 import cost 가 너무 큰 문제를 해결했습니다.
  - 이제 `import { Button } from 'loplat-ui';`으로 똑같이 import 했을 때, Button 에 해당하는 코드만 import 가능합니다.
  - tree shaking을 위해 esModule을 사용합니다. esModule을 인식하지 못하는 프레임워크(ex> Next.js)는 추가적인 Babel 설정이 필요합니다.(ex> next-transpile-modules)

## Fixed

- Help의 maxWidth prop을 optional하게 변경했습니다.
- Input의 rightIcon position 관련 css를 수정했습니다.

# 1.2.0 (2021-11-17)

## Breaking changes

- code splitting을 통해 bundle 용량을 최적화했습니다.
  - 기존 `import { Button } from 'loplat-ui';` 으로 import 했을 때, import cost 가 너무 큰 문제를 해결했습니다.
  - 이제 `import { Button } from 'loplat-ui/core/Button';` 으로 import 가능합니다.

## Docs

- 배포 방법과 폴더 구조에 대한 README가 추가되었습니다.
- Logo를 generate하는 방법에 대한 README가 추가되었습니다.

## Added

- palette.scss
  - `'loplat-ui/core/Palette/index.scss'` 으로 import 가능합니다.

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
