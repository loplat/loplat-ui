import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Polygon = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
        <path id={`polygon_svg__a" d="M0 0h28.648v25.648H0z__${uniqueId}`} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#E8C2FF" d="M17.228 4.25L3.25 14.9l6.456 12.499 14.917-1.69 4.775-12.617z" />
        <g transform="translate(2 3)">
          <mask id={`polygon_svg__b__${uniqueId}`} fill="#fff">
            <use xlinkHref={`#polygon_svg__a__${uniqueId}`} />
          </mask>
          <path
            d="M2.841 12.258l5.58 10.802 13.302-1.508 4.168-11.01-10.647-7.734-12.403 9.45zm4.864 13.39c-.464 0-.894-.257-1.11-.676L.14 12.472c-.278-.538-.13-1.2.352-1.567L14.47.255a1.251 1.251 0 011.492-.017L28.132 9.08c.456.33.634.927.435 1.453L23.791 23.15a1.249 1.249 0 01-1.028.8L7.846 25.64a1.348 1.348 0 01-.14.008z"
            fill="#D998FF"
            mask={`url(#polygon_svg__b__${uniqueId})`}
          />
        </g>
      </g>
    </Svg>
  );
});
