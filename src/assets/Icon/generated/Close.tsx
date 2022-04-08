import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Close = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M26.227.002l.148.015a1.416 1.416 0 011.147 1.031 1.414 1.414 0 01-.366 1.366L15.784 13.786l11.373 11.373a1.413 1.413 0 01-.858 2.406l-.142.007v-.003c-.375.001-.735-.148-1-.414l-11.372-11.37-11.37 11.372a1.41 1.41 0 01-.86.407l-.14.006a1.414 1.414 0 01-1-2.414l11.37-11.371L.415 2.417a1.414 1.414 0 011-2.414l.136.007c.315.03.623.166.864.407l11.369 11.369L25.156.414a1.414 1.414 0 011.071-.412z"
          id={`close_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`close_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#close_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#close_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
