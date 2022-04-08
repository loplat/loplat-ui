import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Description = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.876 0c.365 0 .717.14.98.394l7.52 7.227c.277.266.434.634.434 1.019v1.076l-.001.019.001 14.305a4.247 4.247 0 01-4.242 4.243H4.242A4.247 4.247 0 010 24.041v-19.8A4.246 4.246 0 014.242 0h9.634zm-2.302 2.831l-7.332.002c-.78 0-1.413.633-1.414 1.413v19.8c0 .78.633 1.413 1.414 1.414h14.326c.78 0 1.413-.633 1.414-1.414V11.13h-4.873a3.539 3.539 0 01-3.535-3.535V2.831zm5.618 16.498a1.414 1.414 0 010 2.828H5.355a1.414 1.414 0 110-2.828h11.837zm.033-6.227a1.414 1.414 0 110 2.828H5.388a1.414 1.414 0 110-2.828h11.837zM8.664 6.875a1.414 1.414 0 110 2.828H5.355a1.414 1.414 0 110-2.828h3.309zm5.738-2.988v3.708c0 .39.317.706.707.707h3.884l-4.591-4.415z"
          id={`description_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(5 2)" fill="none" fillRule="evenodd">
        <mask id={`description_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#description_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#description_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-5-2h32v32H-5z" />
        </g>
      </g>
    </Svg>
  );
});
