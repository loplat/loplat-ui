import React from 'react';
import type { IconProps } from '../index';
export const Article = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', className, style }) => (
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
        d="M22.622 0a4.245 4.245 0 014.241 4.241v19.795a4.246 4.246 0 01-4.241 4.242H6.297a1.414 1.414 0 010-2.828h16.325a1.416 1.416 0 001.414-1.414V4.241a1.416 1.416 0 00-1.414-1.414H4.242a1.416 1.416 0 00-1.414 1.414v22.623a1.414 1.414 0 11-2.828 0V4.241A4.246 4.246 0 014.242 0h18.38zM11.828 17.637a1.414 1.414 0 010 2.828h-3.6a1.414 1.414 0 010-2.828h3.6zm6.625-4.912a1.414 1.414 0 010 2.828H8.231a1.414 1.414 0 110-2.828h10.222zm.181-4.912a1.414 1.414 0 010 2.828h-10.4a1.414 1.414 0 010-2.828h10.4z"
        id="article_svg__a"
      />
    </defs>
    <g transform="translate(3 2)" fill="none" fillRule="evenodd">
      <mask id="article_svg__b" fill="#fff">
        <use xlinkHref="#article_svg__a" />
      </mask>
      <g mask="url(#article_svg__b)">
        <path fill={fillColor} d="M-3-2h32v32H-3z" />
      </g>
    </g>
  </svg>
));
