import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const SignOut = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.103 0a1.414 1.414 0 010 2.828H3.534a.708.708 0 00-.707.707v19.086c0 .39.317.706.707.707h10.569a1.413 1.413 0 110 2.827H3.534A3.538 3.538 0 010 22.621V3.535A3.538 3.538 0 013.534 0h10.569zm5.828 4.024l8.054 8.053a1.413 1.413 0 010 2l-8.054 8.054a1.414 1.414 0 01-2-2l5.639-5.64-11.795.001a1.414 1.414 0 010-2.828l11.795-.001-5.639-5.639a1.414 1.414 0 012-2z"
          id={`sign_out_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 3)" fill="none" fillRule="evenodd">
        <mask id={`sign_out_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#sign_out_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#sign_out_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-3h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
