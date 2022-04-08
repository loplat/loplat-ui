import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const SignIn = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.1 0a1.414 1.414 0 010 2.828H3.535a.707.707 0 00-.706.707v19.086c0 .39.316.706.706.707H14.1a1.413 1.413 0 110 2.827H3.535A3.538 3.538 0 010 22.621V3.535A3.539 3.539 0 013.534 0H14.1zm6.729 4.024a1.414 1.414 0 010 2l-5.639 5.639 11.795.001a1.414 1.414 0 010 2.828H15.191l5.638 5.639a1.414 1.414 0 11-2 2l-8.053-8.054a1.412 1.412 0 010-2l8.053-8.053a1.414 1.414 0 012 0z"
          id={`sign_in_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 3)" fill="none" fillRule="evenodd">
        <mask id={`sign_in_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#sign_in_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#sign_in_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-3h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
