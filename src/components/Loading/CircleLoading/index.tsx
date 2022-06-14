import React from 'react';
import { primary } from '../../../core';

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

type Loading = LoadingProps & React.AriaAttributes;

export const CircleLoading = ({
  color = primary,
  duration = 500,
  size = 100,
  zIndex = 0,
  ...props
}: Loading): React.ReactElement => {
  const originalSize = 40;
  const scale = size / 40;

  return (
    <div
      role="progressbar"
      style={{ width: size, height: size, zIndex, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      {...props}
    >
      <svg
        style={{ transform: `scale(${scale})` }}
        x="0px"
        y="0px"
        width={`${originalSize}px`}
        height={`${originalSize}px`}
        viewBox={`0 0 ${originalSize} ${originalSize}`}
      >
        <path
          opacity="0.2"
          fill={color}
          d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
        />
        <path
          fill={color}
          d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur={`${duration}ms`}
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};
