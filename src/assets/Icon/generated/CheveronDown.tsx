import React from 'react';
import type { IconProps } from '../index';
export const CheveronDown = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', className, style }) => (
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
        d="M13.785 15.21c-.375 0-.734-.149-1-.414L.415 2.414a1.414 1.414 0 012-2l11.37 11.381L25.156.415a1.414 1.414 0 012 2l-12.37 12.381a1.417 1.417 0 01-1 .414z"
        id="cheveron_Down_svg__a"
      />
    </defs>
    <g transform="translate(2 8)" fill="none" fillRule="evenodd">
      <mask id="cheveron_Down_svg__b" fill="#fff">
        <use xlinkHref="#cheveron_Down_svg__a" />
      </mask>
      <g mask="url(#cheveron_Down_svg__b)">
        <path fill={fillColor} d="M-2-8h32v32H-2z" />
      </g>
    </g>
  </svg>
));
