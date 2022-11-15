import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Wifi = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
  const uniqueId = suffixForId ?? String(Math.random().toString(36).slice(2, 11));
  return (
    <Svg
      {...marginSpacingProps(props)}
      {...props}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
    >
      <defs>
        <path
          d="M22.261.275a14.13 14.13 0 010 23.166 1.414 1.414 0 11-1.623-2.316 11.3 11.3 0 000-18.535A1.414 1.414 0 1122.261.275zM7.454.14A1.414 1.414 0 017.66 2.59a11.3 11.3 0 000 18.535 1.414 1.414 0 11-1.624 2.316 14.13 14.13 0 010-23.166A1.414 1.414 0 017.454.14zM19.07 4.834a8.574 8.574 0 010 14.054 1.414 1.414 0 01-1.624-2.314 5.746 5.746 0 000-9.425 1.414 1.414 0 111.624-2.315zm-8.428-.136a1.414 1.414 0 01.207 2.451 5.747 5.747 0 000 9.425 1.414 1.414 0 01-1.624 2.314 8.574 8.574 0 010-14.054 1.414 1.414 0 011.417-.136zm3.506 4.158a3.005 3.005 0 110 6.01 3.005 3.005 0 010-6.01z"
          id={`wifi_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`wifi_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#wifi_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#wifi_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
