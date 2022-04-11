import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Cloud = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M22.267 21.202h-10.8a1.414 1.414 0 010-2.828h10.8a3.178 3.178 0 00.68-6.283 1.414 1.414 0 01-1.094-1.613c.063-.359.096-.721.1-1.085a6.56 6.56 0 00-12.86-1.831 1.4 1.4 0 01-1.4 1.019 4.9 4.9 0 00.028 9.793 1.414 1.414 0 010 2.828A7.725 7.725 0 016.71 5.819a9.387 9.387 0 0118.069 3.574c0 .114 0 .229-.008.345a6.005 6.005 0 01-2.5 11.464h-.004z"
          id={`cloud_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 5)" fill="none" fillRule="evenodd">
        <mask id={`cloud_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#cloud_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#cloud_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-5h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
