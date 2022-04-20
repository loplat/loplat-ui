import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Wallet = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M24.037 0a4.247 4.247 0 014.242 4.242v.478a1.414 1.414 0 01-2.828 0v-.478a1.416 1.416 0 00-1.414-1.414H5.002A2.178 2.178 0 002.829 4.92a2.018 2.018 0 002.014 1.936h19.194a4.247 4.247 0 014.242 4.242v10.1a3.539 3.539 0 01-3.535 3.53H5.656A5.662 5.662 0 010 19.072V4.842A4.848 4.848 0 014.843 0h19.194zM2.828 9.245v9.827A2.83 2.83 0 005.656 21.9h19.088c.39 0 .706-.317.707-.707l-.001-1.654-4.895.001a3.539 3.539 0 01-3.535-3.535v-.827a3.539 3.539 0 013.535-3.535l4.895-.001.001-.549a1.416 1.416 0 00-1.414-1.414H4.843a4.814 4.814 0 01-2.015-.434zM25.45 14.47l-4.895.001a.708.708 0 00-.707.707v.827c0 .39.317.706.707.707l4.895-.001V14.47z"
          id={`wallet_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`wallet_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#wallet_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#wallet_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
