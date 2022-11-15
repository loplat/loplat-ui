import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Image = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M24.035 0a4.247 4.247 0 014.242 4.242v6.154a1.414 1.414 0 01-2.828 0V4.242c0-.78-.633-1.413-1.414-1.414H4.242c-.78 0-1.413.633-1.414 1.414v16.135c0 .318.105.61.282.847L17.163 7.197c.264-.271.63-.42 1.008-.413.377.003.737.156 1 .425l8.642 8.846c.285.258.464.632.464 1.047v3.982a3.539 3.539 0 01-3.535 3.535h-20.5A4.247 4.247 0 010 20.377V4.242A4.247 4.247 0 014.242 0h19.793zm-5.887 10.208L6.543 21.791h18.199c.39 0 .706-.317.707-.707v-3.401l-7.301-7.475zm-8.97-4.584a2.827 2.827 0 110 5.654 2.827 2.827 0 110-5.654z"
          id={`image_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`image_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#image_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#image_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
