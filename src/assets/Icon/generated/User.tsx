import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const User = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.432 0a8.235 8.235 0 018.235 8.235 8.223 8.223 0 01-2.687 6.08c4.589 1.62 7.877 5.992 7.884 11.134a1.414 1.414 0 01-2.828 0 8.989 8.989 0 00-8.98-8.979h-3.25a8.989 8.989 0 00-8.978 8.979 1.414 1.414 0 11-2.827 0c.005-5.14 3.292-9.512 7.878-11.134A8.235 8.235 0 0113.431 0zm0 2.822v.005a5.408 5.408 0 105.407 5.408c0-2.987-2.42-5.41-5.407-5.413z"
          id={`user_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(3 3)" fill="none" fillRule="evenodd">
        <mask id={`user_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#user_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#user_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-3-3h32v32H-3z" />
        </g>
      </g>
    </Svg>
  );
});
