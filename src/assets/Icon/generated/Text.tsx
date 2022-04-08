import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Text = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M20.232 0c.78 0 1.414.633 1.414 1.414v2.188a1.414 1.414 0 01-2.828 0v-.774l-6.582-.001V21.45h1.88a1.414 1.414 0 010 2.828H7.53a1.414 1.414 0 010-2.828h1.879V2.827l-6.58.001v.774a1.414 1.414 0 11-2.827 0V1.414C0 .634.634 0 1.415 0h18.817z"
          id={`text_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(5 4)" fill="none" fillRule="evenodd">
        <mask id={`text_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#text_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#text_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-5-4h32v32H-5z" />
        </g>
      </g>
    </Svg>
  );
});
