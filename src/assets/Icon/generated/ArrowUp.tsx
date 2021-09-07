import React from 'react';
import type { IconProps } from '../index';
export const ArrowUp = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', className, style }) => (
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
        d="M14.326.108c.173.07.33.174.464.308l.027.03 12.34 12.34a1.414 1.414 0 01-1 2.413v.001c-.375.001-.735-.148-1-.415L15.2 4.827l-.022 21.33c0 .735-.561 1.338-1.278 1.407l-.136.006a1.415 1.415 0 01-1.413-1.415l.022-21.328-9.958 9.958a1.414 1.414 0 11-2-2L12.785.415a1.414 1.414 0 011.416-.353l.125.046z"
        id="arrow_up_svg__a"
      />
    </defs>
    <g transform="translate(2 2)" fill="none" fillRule="evenodd">
      <mask id="arrow_up_svg__b" fill="#fff">
        <use xlinkHref="#arrow_up_svg__a" />
      </mask>
      <g mask="url(#arrow_up_svg__b)">
        <path fill={fillColor} d="M-2-2h32v32H-2z" />
      </g>
    </g>
  </svg>
));
