import React from 'react';
import type { IconProps } from '../index';
export const Delete = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', className, style }) => (
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
      <path d="M26.9 0a1.414 1.414 0 01.14 2.824l-.14.004H1.453a1.414 1.414 0 110-2.827H26.9z" id="delete_svg__a" />
    </defs>
    <g transform="translate(2 14.724)" fill="none" fillRule="evenodd">
      <mask id="delete_svg__b" fill="#fff">
        <use xlinkHref="#delete_svg__a" />
      </mask>
      <g mask="url(#delete_svg__b)">
        <path fill={fillColor} d="M-2-14.724h32v32H-2z" />
      </g>
    </g>
  </svg>
));
