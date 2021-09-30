import React from 'react';
import type { IconProps } from '../index';
export const MoreVert =
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
          d="M4.4 22.178a3.182 3.182 0 11-2.436 5.879 3.182 3.182 0 012.436-5.88zM3.183 10.97a3.181 3.181 0 110 6.362 3.181 3.181 0 010-6.362zM4.4.243a3.182 3.182 0 11-2.436 5.879A3.182 3.182 0 014.4.242z"
          id="more_vert_svg__a"
        />
      </defs>
      <g transform="translate(13 2)" fill="none" fillRule="evenodd">
        <mask id="more_vert_svg__b" fill="#fff">
          <use xlinkHref="#more_vert_svg__a" />
        </mask>
        <g mask="url(#more_vert_svg__b)">
          <path fill={fillColor} d="M-13-2h32v32h-32z" />
        </g>
      </g>
    </svg>
  ));
