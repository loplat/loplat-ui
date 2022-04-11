import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const MoreHoriz = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M25.116 0a3.181 3.181 0 110 6.362 3.181 3.181 0 010-6.362zM14.147 0a3.181 3.181 0 11.002 6.362A3.181 3.181 0 0114.147 0zM3.18 0a3.181 3.181 0 11.002 6.362A3.181 3.181 0 013.18 0z"
          id={`more_horiz_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 13)" fill="none" fillRule="evenodd">
        <mask id={`more_horiz_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#more_horiz_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#more_horiz_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-13h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
