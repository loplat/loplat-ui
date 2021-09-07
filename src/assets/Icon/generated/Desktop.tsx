import React from 'react';
import type { IconProps } from '../index';
export const Desktop = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', className, style }) => (
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
        d="M6.894 26.307a1.414 1.414 0 010-2.828h5.831v-2.365H1.414C.634 21.114 0 20.481 0 19.7V1.414C0 .634.633 0 1.414 0h25.451c.78 0 1.413.633 1.414 1.414v18.282a1.415 1.415 0 01-1.414 1.418H15.552v2.365h5.833a1.414 1.414 0 010 2.828H6.894zM25.451 2.832H2.828v15.454h22.623V2.832z"
        id="desktop_svg__a"
      />
    </defs>
    <g transform="translate(2 3)" fill="none" fillRule="evenodd">
      <mask id="desktop_svg__b" fill="#fff">
        <use xlinkHref="#desktop_svg__a" />
      </mask>
      <g mask="url(#desktop_svg__b)">
        <path fill={fillColor} d="M-2-3h32v32H-2z" />
      </g>
    </g>
  </svg>
));
