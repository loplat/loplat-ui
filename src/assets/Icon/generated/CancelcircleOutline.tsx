import React from 'react';
import type { IconProps } from '../index';
export const CancelcircleOutline =
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
          d="M25.888 6.288a14.132 14.132 0 01-1.523 17.594l-.243.248a14.092 14.092 0 01-10 4.135A14.132 14.132 0 1125.888 6.288zM14.122 2.826a11.307 11.307 0 10.017 22.614 11.307 11.307 0 00-.017-22.614zM10.38 8.39l3.743 3.742 3.741-3.74a1.414 1.414 0 112 2l-3.741 3.74 3.742 3.742a1.414 1.414 0 01-1 2.413v.001c-.376 0-.736-.148-1-.414l-3.742-3.741-3.743 3.742a1.414 1.414 0 01-2-2l3.743-3.742L8.38 10.39a1.414 1.414 0 012-2z"
          id="cancelcircle_outline_svg__a"
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id="cancelcircle_outline_svg__b" fill="#fff">
          <use xlinkHref="#cancelcircle_outline_svg__a" />
        </mask>
        <g mask="url(#cancelcircle_outline_svg__b)">
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </svg>
  ));
