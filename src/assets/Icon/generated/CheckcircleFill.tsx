import React from 'react';
import type { IconProps } from '../index';
export const CheckcircleFill = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', className, style }) => (
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
        d="M25.888 6.288a14.132 14.132 0 01-1.766 17.842 14.1 14.1 0 01-10 4.135A14.132 14.132 0 1125.888 6.288zm-4.91 2.705a1.414 1.414 0 00-2 0L12.39 15.58l-3.17-2.89a1.414 1.414 0 10-1.905 2.09l4.167 3.8a.609.609 0 00.04.033l.035.03c.026.021.053.041.082.06l.028.02a.966.966 0 00.085.05l.048.026a.912.912 0 00.08.036l.034.015a1.343 1.343 0 00.337.087l.042.003.092.005.037.002.012.001c.376.001.737-.147 1.002-.413l7.541-7.542a1.414 1.414 0 000-2z"
        id="checkcircle_fill_svg__a"
      />
    </defs>
    <g transform="translate(2 2)" fill="none" fillRule="evenodd">
      <mask id="checkcircle_fill_svg__b" fill="#fff">
        <use xlinkHref="#checkcircle_fill_svg__a" />
      </mask>
      <g mask="url(#checkcircle_fill_svg__b)">
        <path fill={fillColor} d="M-2-2h32v32H-2z" />
      </g>
    </g>
  </svg>
));
