import React from 'react';
import type { IconProps } from '../index';
export const ArrowDropUp = React.memo<IconProps>(
  ({ size = 18, fillColor = '#9DAAB7', suffixForId, className, style }) => {
    const uniqueId = suffixForId ?? String(Math.random().toString(36).slice(2, 11));
    return (
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
            d="M27.489 12.19L15.679.653a2.263 2.263 0 00-3.181 0L.687 12.191A2.267 2.267 0 00.17 14.68a2.266 2.266 0 002.108 1.417h23.619c.93 0 1.758-.556 2.109-1.417a2.27 2.27 0 00-.518-2.489"
            id={`arrowDrop_up_svg__a__${uniqueId}`}
          />
        </defs>
        <g transform="translate(2 8)" fill="none" fillRule="evenodd">
          <mask id={`arrowDrop_up_svg__b__${uniqueId}`} fill="#fff">
            <use xlinkHref={`#arrowDrop_up_svg__a__${uniqueId}`} />
          </mask>
          <use fill="#000" xlinkHref={`#arrowDrop_up_svg__a__${uniqueId}`} />
          <g mask={`url(#arrowDrop_up_svg__b__${uniqueId})`}>
            <path fill={fillColor} d="M-2-8h32v32H-2z" />
          </g>
        </g>
      </svg>
    );
  },
);
