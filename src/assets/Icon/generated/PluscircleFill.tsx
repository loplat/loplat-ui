import React from 'react';
import type { IconProps } from '../index';
export const PluscircleFill =
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
          d="M19.552 1.077a14.14 14.14 0 018.728 13.064c-.008 7.806-6.334 14.131-14.14 14.14a14.14 14.14 0 115.412-27.204zM14.14 6.015c-.78 0-1.414.633-1.414 1.414v5.3H7.433a1.414 1.414 0 000 2.827h5.293v5.286a1.414 1.414 0 002.828 0v-5.286h5.291a1.414 1.414 0 000-2.828h-5.29V7.43c0-.78-.634-1.414-1.415-1.414z"
          id="pluscircle_fill_svg__a"
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id="pluscircle_fill_svg__b" fill="#fff">
          <use xlinkHref="#pluscircle_fill_svg__a" />
        </mask>
        <g mask="url(#pluscircle_fill_svg__b)">
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </svg>
  ));
