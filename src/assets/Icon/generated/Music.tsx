import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Music = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M7.171 5.713c0-.628.415-1.18 1.018-1.357l14.763-4.3a1.415 1.415 0 011.81 1.358v18.179l.001.086a5 5 0 11-2.83-4.505l.001-11.877L9.998 6.775v3.9l8.875-2.578a1.413 1.413 0 11.791 2.714l-9.666 2.816.001 9.562.001.087a5 5 0 11-2.829-4.505V5.713zM5 21.107a2.171 2.171 0 100 4.342 2.171 2.171 0 000-4.342zm14.763-3.597a2.17 2.17 0 102.171 2.183l-.001-.04-.005-.128a2.172 2.172 0 00-2.165-2.015z"
          id={`music_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(4 2)" fill="none" fillRule="evenodd">
        <mask id={`music_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#music_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#music_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-4-2h32v32H-4z" />
        </g>
      </g>
    </Svg>
  );
});
