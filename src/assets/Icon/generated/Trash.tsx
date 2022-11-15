import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Trash = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M8.784 5.24a5.24 5.24 0 0110.456-.5h7.512a1.3 1.3 0 010 2.6l-1.032-.001.001 16.576a4.13 4.13 0 01-4.132 4.13H6.541a4.131 4.131 0 01-4.126-4.126l-.001-16.58L1.3 7.34a1.3 1.3 0 010-2.6h5.445a1.3 1.3 0 110 2.6l-1.731-.001.001 16.576a1.531 1.531 0 001.529 1.529h15.048a1.531 1.531 0 001.529-1.529L23.12 7.339h-5.14l-.013.001h-7.883a1.3 1.3 0 01-1.3-1.3v-.8zM19.26 10a1.3 1.3 0 011.3 1.3v10.191a1.3 1.3 0 01-2.6-.002V11.3a1.3 1.3 0 011.3-1.3zM8.871 10a1.3 1.3 0 011.3 1.3v10.191a1.3 1.3 0 01-1.167 1.291l-.133.007a1.3 1.3 0 01-1.3-1.3V11.3a1.3 1.3 0 011.3-1.3zm5.207 0a1.3 1.3 0 011.3 1.3v10.191a1.3 1.3 0 01-2.6-.002V11.3a1.3 1.3 0 011.3-1.3zm-.053-7.412c-1.27 0-2.361.904-2.597 2.152h5.194a2.643 2.643 0 00-2.597-2.152z"
          id={`trash_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`trash_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#trash_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#trash_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
