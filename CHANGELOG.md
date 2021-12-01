## 1.2.2 (2021-12-01)

### Fixed
- 동일한 Icon을 두 번 이상 사용할 시 id collision이 일어나는 현상을 수정했습니다. 
- palette 색상을 대폭 수정했습니다.
- Button과 IconButton의 style을 수정했습니다.
  - height를 강제하지 않고 padding과 내용으로 높이를 결정합니다.
  - Icon svg의 색깔이 연하게 나타나는 버그를 수정했습니다.


## 1.2.1 (2021-11-19)

### Breaking changes

- tree shaking을 통해 bundle 용량을 최적화했습니다.
  - 기존 ```import { Button } from 'loplat-ui';```으로 import 했을 때, tree shaking이 되지 않아 import cost 가 너무 큰 문제를 해결했습니다.
  - 이제 ```import { Button } from 'loplat-ui';```으로 똑같이 import 했을 때, Button 에 해당하는 코드만 import 가능합니다.
  - tree shaking을 위해 esModule을 사용합니다. esModule을 인식하지 못하는 프레임워크(ex> Next.js)는 추가적인 Babel 설정이 필요합니다.(ex> next-transpile-modules)

### Fixed

- Help의 maxWidth prop을 optional하게 변경했습니다.
- Input의 rightIcon position 관련 css를 수정했습니다.
 

## 1.2.0 (2021-11-17)

### Breaking changes

- code splitting을 통해 bundle 용량을 최적화했습니다.
  - 기존 ```import { Button } from 'loplat-ui';``` 으로 import 했을 때, import cost 가 너무 큰 문제를 해결했습니다.
  - 이제 ```import { Button } from 'loplat-ui/core/Button';``` 으로 import 가능합니다. 

### Docs

- 배포 방법과 폴더 구조에 대한 README가 추가되었습니다.
- Logo를 generate하는 방법에 대한 README가 추가되었습니다.

### Added

- palette.scss
  - ```'loplat-ui/core/Palette/index.scss'``` 으로 import 가능합니다.

### Fixed

- Input의 autoComplete prop 오타를 수정했습니다.
- Input에 rightIcon prop이 추가되었습니다.
- Toast 양 옆 빈 공백이 클릭되지 않는 버그를 수정했습니다.
- Button css를 수정했습니다.
  - Desktop에서 pointer cursor를 적용했습니다.
  - Desktop에서만 hover style이 나타나도록 수정했습니다.
- Spinner 이미지의 용량을 줄였습니다.
  - 안드로이드 기기에서 이미지가 잘리는 문제를 해결했습니다.

## 1.1.3 (2021-11-03)

### Added

- none

### Fixed

- Toast 에 padding과 box-sizing을 적용했습니다.

## 1.1.2 (2021-11-03)

### Added

- none

### Fixed

- Spinner에 스크롤바가 생기는 버그를 수정했습니다.
- circle spinner의 이미지를 교체했습니다.

## 1.1.1 (2021-11-02)

### Added

- none

### Fixed

- Spinner 컴포넌트 폴더구조를 변경했습니다.
- Spinner 컴포넌트를 export 했습니다.

## 1.1.0 (2021-11-02)

### Added

- Spinner 컴포넌트

### Fixed

- Input에 autocomplete을 추가하였습니다.
- Cheveron 아이콘 오타를 수정하였습니다.
- 스토리북에서 아이콘의 이름을 확인할 수 있습니다.

---

## 1.0.0 (2021-11-02)

npm 배포방식이 기존 google artifacts 에서 Npm public로 변경됨에 따라 새롭게 1.0.0으로 정의합니다.
기존 1.0.14까지의 내용이 1.0.0에 모두 반영되어 있습니다.

---

## 1.0.14 (2021-11-01)

### Added

- none

### Fixed

- Input에 OnBlur, onFocus를 추가하였습니다.

---

## 1.0.13 (2021-10-22)

### Added

- none

### Fixed

- Button의 top, bottom padding을 삭제하였습니다.

---

## 1.0.12 (2021-10-22)

### Added

- none

### Fixed

- Typo의 `font-family: inherit` 옵션을 삭제하였습니다.

---

## 1.0.11 (2021-10-21)

### Added

- none

### Fixed

- Input props에 type을 추가,
- Input 에 fullWidth가 안되는 버그 수정
- Caption의 size가 고정되어있는 버그 수정
- Caption의 태그를 div에서 small 로 수정

---

## 1.0.10 (2021-10-21)

### Added

- none

### Fixed

- Typography의 width가 fit-content로 수정되었습니다.

---

## 1.0.9 (2021-10-21)

### Added

- IconButton

### Fixed

- Typography Headline에 font-weight를 weight prop으로 지정할 수 있습니다.
- row, col의 간격을 gap prop으로 지정할 수 있습니다.

---

## 1.0.4 (2021-10-14)

### Added

- none

### Fixed

- Badge, Button, Help, Input, Col, Grid, Row, RadioButton이 import 불가능한 상황

---

## 1.0.0 (2021-10-14)

### Added

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

### Fixed

- none
