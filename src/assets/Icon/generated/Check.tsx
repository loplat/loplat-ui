import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Check = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M9.755 18.99l-9.34-6.934a1.414 1.414 0 012-2l8.34 5.933L25.223.414a1.414 1.414 0 012 2L11.755 18.99a1.417 1.417 0 01-2 0z"
          id={`check_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2.03 5.806)" fill="none" fillRule="evenodd">
        <mask id={`check_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#check_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#check_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2.03-5.806h32v32h-32z" />
        </g>
      </g>
    </Svg>
  );
});
