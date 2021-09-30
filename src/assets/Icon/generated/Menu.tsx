import React from 'react';
import type { IconProps } from '../index';
export const Menu =
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
          d="M26.194 18.794a1.413 1.413 0 110 2.827H1.452a1.413 1.413 0 110-2.827h24.742zm0-9.397a1.414 1.414 0 110 2.827H1.452a1.414 1.414 0 110-2.827h24.742zm0-9.397a1.414 1.414 0 010 2.828H1.452a1.414 1.414 0 110-2.828h24.742z"
          id="menu_svg__a"
        />
      </defs>
      <g transform="translate(2 5)" fill="none" fillRule="evenodd">
        <mask id="menu_svg__b" fill="#fff">
          <use xlinkHref="#menu_svg__a" />
        </mask>
        <g mask="url(#menu_svg__b)">
          <path fill={fillColor} d="M-2-5h32v32H-2z" />
        </g>
      </g>
    </svg>
  ));
