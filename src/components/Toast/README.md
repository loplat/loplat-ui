# Toast

[react-hot-toast](https://github.com/timolins/react-hot-toast) 를 참고하였습니다. 위 라이브러리에서 제공하는 API는 모두 제공하나, 일부 type이 다르고
기본적으로 지원하는 컴포넌트가 없거나 상이할 수 있습니다.

일부 타입의 경우 관련된 내용은 제플린 디자인 가이드라인의 명칭을 그대로 사용하였습니다.

## Getting Started

```js
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

const App = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster/>
    </div>
  );
};
```

## Documentation

Find the full API reference on official [documentation](https://react-hot-toast.com/docs).
