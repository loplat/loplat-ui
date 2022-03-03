# Icon

src/Icon/svgs 에 추가 혹은 대체할 svg 아이콘을 넣고 프로젝트 루트에서 다음을 실행해주세요.

```
yarn svgr
```
위의 명령어는 아래와 같이 동작합니다.
```
yarn generated-svgr && yarn generated-icon-export && cd src/assets/Icon/tools && sh assign-id-to-svg.sh
```

### ```yarn generated-svgr``` 

svg 파일을 기반으로 tsx 파일을 생성합니다.

### ```yarn generated-icon-export```
생성된 tsx 파일을 기반으로 'export.generated.ts' 파일을 생성합니다.

### ```cd src/assets/Icon/tools && sh assign-id-to-svg.sh```
svg path id collision 문제를 해결하기 위해 svg 마다 uniqueId를 부여합니다.
 
svgr에서 이 문제에 대한 해결법을 제공해주지 않습니다: https://github.com/gregberge/svgr/issues/150
