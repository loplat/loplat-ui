import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Mobile = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.712 0a3.538 3.538 0 013.534 3.535v21.208a3.538 3.538 0 01-3.534 3.532H3.534A3.538 3.538 0 010 24.74V3.535A3.538 3.538 0 013.534 0h10.178zM3.534 2.825a.707.707 0 00-.706.707V24.74a.706.706 0 00.706.707h10.178c.39 0 .707-.317.707-.707V3.535a.708.708 0 00-.707-.707l-2.044-.001a1.06 1.06 0 01-.982 1.462H6.561a1.06 1.06 0 01-.981-1.463l-2.046-.001z"
          id={`mobile_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(7 2)" fill="none" fillRule="evenodd">
        <mask id={`mobile_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#mobile_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#mobile_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-7-2h32v32H-7z" />
        </g>
      </g>
    </Svg>
  );
});
