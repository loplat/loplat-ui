import React from 'react';
import type { IconProps } from '../index';
export const CheckcircleOutline = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', className, style }) => (
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
        d="M25.888 6.288a14.132 14.132 0 01-1.766 17.842 14.1 14.1 0 01-10 4.135A14.132 14.132 0 1125.888 6.288zm-11.766-3.46a11.306 11.306 0 10.02 22.611 11.306 11.306 0 00-.02-22.612zm6.855 6.165a1.414 1.414 0 010 2l-7.54 7.542a1.412 1.412 0 01-1.002.413h-.013l-.037-.003-.092-.005-.042-.003a1.343 1.343 0 01-.336-.087l-.035-.015a.912.912 0 01-.08-.036l-.048-.027a.966.966 0 01-.085-.05l-.028-.02a.991.991 0 01-.082-.059l-.036-.03a.609.609 0 01-.039-.034l-4.167-3.8a1.414 1.414 0 111.905-2.09l3.17 2.891 6.587-6.587a1.414 1.414 0 012 0z"
        id="checkcircle_outline_svg__a"
      />
    </defs>
    <g transform="translate(2 2)" fill="none" fillRule="evenodd">
      <mask id="checkcircle_outline_svg__b" fill="#fff">
        <use xlinkHref="#checkcircle_outline_svg__a" />
      </mask>
      <g mask="url(#checkcircle_outline_svg__b)">
        <path fill={fillColor} d="M-2-2h32v32H-2z" />
      </g>
    </g>
  </svg>
));
