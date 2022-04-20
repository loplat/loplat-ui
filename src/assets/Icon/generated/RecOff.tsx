import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const RecOff = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M25.257.375c.499.5.5 1.308.004 1.81L22.307 5.14c.215.515.327 1.07.327 1.632v.241l4.247-2.172a2.828 2.828 0 014.116 2.517V17.62a2.827 2.827 0 01-4.115 2.517l-4.248-2.172v.242a4.247 4.247 0 01-4.251 4.242H6.951c-.561 0-1.115-.11-1.629-.325l-3.134 3.133a1.282 1.282 0 01-1.813-1.813L23.448.371a1.282 1.282 0 011.809.004zm2.904 6.986l-6.3 3.225a1.413 1.413 0 01-2.058-1.258V7.642L7.824 19.621h10.559a1.416 1.416 0 001.414-1.414v-2.553a1.414 1.414 0 012.058-1.259l6.306 3.225V7.361zM15.844 2.533a1.414 1.414 0 010 2.828h-8.89A1.416 1.416 0 005.54 6.775v9.465a1.414 1.414 0 01-2.828-.003V6.775a4.247 4.247 0 014.242-4.242h8.89z"
          id={`rec_off_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(0 3)" fill="none" fillRule="evenodd">
        <mask id={`rec_off_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#rec_off_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#rec_off_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M0-3h32v32H0z" />
        </g>
      </g>
    </Svg>
  );
});
