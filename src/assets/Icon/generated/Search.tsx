import React from 'react';
import type { IconProps } from '../index';
export const Search = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', className, style }) => (
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
        d="M15.284.842a11.054 11.054 0 016.824 10.212 11.032 11.032 0 01-3.19 7.762l-.068.06a1.414 1.414 0 012 0l6.988 6.988a1.413 1.413 0 11-2 2l-6.988-6.989a1.414 1.414 0 01-.068-1.926 11.022 11.022 0 01-7.727 3.16A11.054 11.054 0 1115.285.841zm-4.229 1.986a8.226 8.226 0 108.225 8.226 8.233 8.233 0 00-8.225-8.226z"
        id="search_svg__a"
      />
    </defs>
    <g transform="translate(2 2)" fill="none" fillRule="evenodd">
      <mask id="search_svg__b" fill="#fff">
        <use xlinkHref="#search_svg__a" />
      </mask>
      <g mask="url(#search_svg__b)">
        <path fill={fillColor} d="M-2-2h32v32H-2z" />
      </g>
    </g>
  </svg>
));
