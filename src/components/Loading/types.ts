import { AriaAttributes } from 'react';

export type LoadingProps = {
  /** 로딩 컴포넌트의 색상입니다. */
  color?: string;
  /** 로딩 컴포넌트가 한 바퀴 도는데 걸리는 시간을 `ms` 단위로 조절합니다. */
  duration?: number;
  /** 로딩 컴포넌트의 크기를 `px` 단위로 조절합니다. */
  size?: number;
  /** z-index를 결정합니다. */
  zIndex?: number;
};

export type Loading = LoadingProps & AriaAttributes;
