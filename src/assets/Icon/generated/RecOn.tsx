import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const RecOn = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M15.677 19.916H4.242A4.247 4.247 0 010 15.674V4.242A4.247 4.247 0 014.242 0a1.414 1.414 0 110 2.828c-.78 0-1.413.633-1.414 1.414v11.432c.003.78.635 1.41 1.414 1.41h11.432c.78 0 1.413-.633 1.414-1.414v-2.553a1.414 1.414 0 012.058-1.259l6.305 3.225V4.829l-6.305 3.225a1.414 1.414 0 01-2.058-1.259V4.242c0-.78-.633-1.413-1.414-1.414h-7.9a1.414 1.414 0 110-2.828h7.9a4.247 4.247 0 014.242 4.242v.242l4.246-2.173a2.829 2.829 0 014.117 2.518v10.255a2.827 2.827 0 01-4.116 2.517l-4.247-2.172v.242a4.247 4.247 0 01-4.239 4.245z"
          id={`rec_on_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 6)" fill="none" fillRule="evenodd">
        <mask id={`rec_on_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#rec_on_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#rec_on_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-6h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
