import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Compass = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M21.208 1.894a14.139 14.139 0 01-7.067 26.384 14.142 14.142 0 01-12.31-21.1 1.414 1.414 0 012.46 1.393 11.319 11.319 0 101.85-2.43 1.414 1.414 0 01-2-2 14.139 14.139 0 0117.067-2.247zm.476 4.701c.371.371.506.917.351 1.418l-3.1 9.991a1.414 1.414 0 01-.93.931l-9.992 3.1a1.414 1.414 0 01-1.769-1.769l3.1-9.99c.138-.446.486-.794.931-.932l9.991-3.1a1.414 1.414 0 011.418.351zM18.54 9.74l-6.715 2.084-2.083 6.714 6.714-2.084L18.54 9.74zm-4.385 2.632a1.767 1.767 0 010 3.534 1.767 1.767 0 01-.007-3.534h.007z"
          id={`compass_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`compass_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#compass_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#compass_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
