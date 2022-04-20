import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Shield = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M11.438 28.272l-.02-.002a1.426 1.426 0 01-.247-.05A15.765 15.765 0 010 13.211v-7.92c0-.587.361-1.113.909-1.322l2.814-1.074a1.413 1.413 0 011.008 2.641l-1.9.727v6.948a12.92 12.92 0 008.747 12.17 12.92 12.92 0 008.753-12.172V6.27l-8.754-3.343L8.269 4.19a1.414 1.414 0 11-1.008-2.642L11.073.093a1.407 1.407 0 011.008 0L22.24 3.97c.548.21.91.735.91 1.321v7.921a15.765 15.765 0 01-11.03 14.964 1.418 1.418 0 01-.535.106l-.008-.002-.139-.007z"
          id={`shield_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(4 2)" fill="none" fillRule="evenodd">
        <mask id={`shield_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#shield_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#shield_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-4-2h32v32H-4z" />
        </g>
      </g>
    </Svg>
  );
});
