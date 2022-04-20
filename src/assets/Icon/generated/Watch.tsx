import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Watch = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.594 25.447a1.414 1.414 0 010 2.828h-6.9a1.414 1.414 0 010-2.828h6.9zm2.448-21.448a4.247 4.247 0 014.242 4.242v11.8a4.247 4.247 0 01-4.236 4.242H4.242A4.247 4.247 0 010 20.041v-11.8a4.247 4.247 0 014.242-4.242h11.8zm.006 2.823h-11.8a1.416 1.416 0 00-1.414 1.414v11.8c.001.78.634 1.413 1.414 1.414h11.8a1.416 1.416 0 001.414-1.414v-11.8a1.416 1.416 0 00-1.414-1.414zm-5.906 1.539c.78 0 1.414.633 1.414 1.414v2.954h2.661a1.414 1.414 0 010 2.828l.004-.004h-4.079c-.78 0-1.414-.633-1.414-1.414V9.775c0-.78.633-1.414 1.414-1.414zM13.594 0a1.414 1.414 0 010 2.828h-6.9a1.414 1.414 0 110-2.828h6.9z"
          id={`watch_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(6 2)" fill="none" fillRule="evenodd">
        <mask id={`watch_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#watch_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#watch_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-6-2h32v32H-6z" />
        </g>
      </g>
    </Svg>
  );
});
