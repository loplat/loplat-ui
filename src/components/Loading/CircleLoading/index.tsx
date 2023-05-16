import React from 'react';
import type { CircleLoadingType } from '../types';
import { primary, loadingZIndex } from '../../../core';

export const CircleLoading = ({
  color = primary,
  duration = 500,
  size = 100,
  zIndex = loadingZIndex,
  strokeWidth = 3,
  ...props
}: CircleLoadingType): React.ReactElement => {
  const originalSize = 40;
  const scale = (size / originalSize) * 1.33;

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
        width={`${originalSize}px`}
        height={`${originalSize}px`}
        viewBox={`0 0 ${originalSize} ${originalSize}`}
      >
        <circle cx="20" cy="20" fill="none" stroke={color} strokeWidth={strokeWidth} r={14} opacity="0.2" />
        <circle cx="20" cy="20" fill="none" stroke={color} strokeWidth={strokeWidth} r={14} strokeDasharray="10 1000">
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur={`${duration}ms`}
            values="0 20 20;360 20 20"
            keyTimes="0;1"
          />
        </circle>
      </svg>
    </div>
  );
};
