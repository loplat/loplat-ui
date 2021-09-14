import React from 'react';
import type { IconProps } from '../index';
export const CheveronLeft = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', className, style }) => (
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
        d="M13.795 27.57a1.408 1.408 0 01-1-.414L.413 14.786a1.416 1.416 0 010-2L12.795.413a1.414 1.414 0 012 2l-11.38 11.37 11.38 11.371a1.413 1.413 0 01-1 2.414z"
        id="cheveron_left_svg__a"
      />
    </defs>
    <g transform="translate(8 2)" fill="none" fillRule="evenodd">
      <mask id="cheveron_left_svg__b" fill="#fff">
        <use xlinkHref="#cheveron_left_svg__a" />
      </mask>
      <g mask="url(#cheveron_left_svg__b)">
        <path fill={fillColor} d="M-8-2h32v32H-8z" />
      </g>
    </g>
  </svg>
));
