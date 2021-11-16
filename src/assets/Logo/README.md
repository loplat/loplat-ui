# Logo
이 문서를 작성하고 있는 시점에서 logo는 icon과 다르게 모두가 같은 사이즈를 가지고 있는 것이 아니기 때문에, icon과 같이 일괄적으로 자동화하기가 어려운 점이 있습니다.

src/Logo/svgs 에 추가 혹은 대체할 svg 아이콘을 넣고 수동으로 컴포넌트를 작성해주세요.

수동으로 작성하는 방법은 다음과 같습니다.
assets/Icon/svgs에 추가 혹은 대체할 svg 아이콘을 넣고, `yarn svgr` 명령어를 통해 assets/Icon/generated에 만들어진 컴포넌트 `.tsx` 파일을 assets/Logo/generated로 옮깁니다.

이후, 실제 로고 사이즈에 맞게 컴포넌트 코드를 직접 수정해주세요.
