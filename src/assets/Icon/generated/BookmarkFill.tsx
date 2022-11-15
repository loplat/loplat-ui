import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const BookmarkFill = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M19.208 28.107l-8.558-4.673-8.559 4.673c-.207.113-.44.172-.676.173A1.415 1.415 0 010 26.863V4.242A4.247 4.247 0 014.242 0h13.523a3.539 3.539 0 013.534 3.535v23.327a1.416 1.416 0 01-2.091 1.245z"
          id={`bookmark-fill_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(5 2)" fill="none" fillRule="evenodd">
        <mask id={`bookmark-fill_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#bookmark-fill_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#bookmark-fill_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-5-2h32v32H-5z" />
        </g>
      </g>
    </Svg>
  );
});
