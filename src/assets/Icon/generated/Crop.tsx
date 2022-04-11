import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Crop = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M7.961 10.363c.437.253.707.72.707 1.225v7.854h18.028a1.414 1.414 0 110 2.828l-4.428-.001v4.58a1.414 1.414 0 01-2.828 0v-4.58l-12.186.001c-.78 0-1.414-.633-1.414-1.414v-9.268a1.414 1.414 0 012.121-1.225zM7.254 0c.78 0 1.414.633 1.414 1.414v4.579l12.186.001c.78 0 1.414.633 1.414 1.414v9.267a1.414 1.414 0 01-2.828 0V8.822H1.414a1.414 1.414 0 110-2.828l4.426-.001V1.414C5.84.634 6.473 0 7.254 0z"
          id={`crop_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`crop_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#crop_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#crop_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
