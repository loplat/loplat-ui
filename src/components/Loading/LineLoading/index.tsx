import React from 'react';
import type { Loading } from '../types';
import { primary, loadingZIndex } from '../../../core';

export const LineLoading = ({
  color = primary,
  duration = 600,
  size = 80,
  zIndex = loadingZIndex,
  ...props
}: Loading): React.ReactElement => {
  const originalSize = 30;
  const scale = size / originalSize;

  return (
    <div
      role="progressbar"
      style={{
        width: size,
        height: size,
        zIndex,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
      {...props}
    >
      <svg
        style={{ transform: `scale(${scale})` }}
        x="0px"
        y="0px"
        width={`${originalSize * 0.8}px`}
        height={`${originalSize}px`}
        viewBox={`0 0 ${originalSize * 0.8} ${originalSize}`}
      >
        {/* code from https://codepen.io/aurer/pen/ZEJxpO */}
        <rect x="0" y="13" width="4" height="5" fill={color}>
          <animate
            attributeName="height"
            attributeType="XML"
            values="5;21;5"
            begin="0s"
            dur={`${duration}ms`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin="0s"
            dur={`${duration}ms`}
            repeatCount="indefinite"
          />
        </rect>
        <rect x="10" y="13" width="4" height="5" fill={color}>
          <animate
            attributeName="height"
            attributeType="XML"
            values="5;21;5"
            begin="0.15s"
            dur={`${duration}ms`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin="0.15s"
            dur={`${duration}ms`}
            repeatCount="indefinite"
          />
        </rect>
        <rect x="20" y="13" width="4" height="5" fill={color}>
          <animate
            attributeName="height"
            attributeType="XML"
            values="5;21;5"
            begin="0.3s"
            dur={`${duration}ms`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin="0.3s"
            dur={`${duration}ms`}
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};
