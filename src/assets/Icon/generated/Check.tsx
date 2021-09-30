import React from 'react';
import type { IconProps } from '../index';
export const Check =
  React.memo <
  IconProps >
  (({ size = 18, fillColor = '#9DAAB7', className, style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={style}
      className={className}
      viewBox="0 0 32 32"
    >
      <defs>
        <path
          d="M9.755 18.99l-9.34-6.934a1.414 1.414 0 012-2l8.34 5.933L25.223.414a1.414 1.414 0 012 2L11.755 18.99a1.417 1.417 0 01-2 0z"
          id="check_svg__a"
        />
      </defs>
      <g transform="translate(2.03 5.806)" fill="none" fillRule="evenodd">
        <mask id="check_svg__b" fill="#fff">
          <use xlinkHref="#check_svg__a" />
        </mask>
        <g mask="url(#check_svg__b)">
          <path fill={fillColor} d="M-2.03-5.806h32v32h-32z" />
        </g>
      </g>
    </svg>
  ));
