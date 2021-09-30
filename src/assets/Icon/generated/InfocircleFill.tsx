import React from 'react';
import type { IconProps } from '../index';
export const InfocircleFill =
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
          d="M19.552 1.077a14.14 14.14 0 018.728 13.064c-.008 7.806-6.334 14.131-14.14 14.14a14.14 14.14 0 115.412-27.204zm-5.412 10.48c-.78 0-1.414.632-1.414 1.413v7.172a1.415 1.415 0 002.828 0V12.97c0-.78-.633-1.414-1.414-1.414zm0-4.942a1.488 1.488 0 100 2.976 1.488 1.488 0 000-2.976z"
          id="infocircle_fill_svg__a"
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id="infocircle_fill_svg__b" fill="#fff">
          <use xlinkHref="#infocircle_fill_svg__a" />
        </mask>
        <g mask="url(#infocircle_fill_svg__b)" fillRule="nonzero">
          <path d="M19.552 1.077a14.14 14.14 0 018.728 13.064c-.008 7.806-6.334 14.131-14.14 14.14a14.14 14.14 0 115.412-27.204zm-5.412 10.48c-.78 0-1.414.632-1.414 1.413v7.172a1.415 1.415 0 002.828 0V12.97c0-.78-.633-1.414-1.414-1.414zm0-4.942a1.488 1.488 0 100 2.976 1.488 1.488 0 000-2.976z" />
        </g>
        <g mask="url(#infocircle_fill_svg__b)">
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </svg>
  ));
