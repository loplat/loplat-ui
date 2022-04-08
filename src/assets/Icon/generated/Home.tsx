import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Home = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M5.63 13.528c.445.262.713.745.699 1.262v9.252c.002.776.63 1.404 1.407 1.406h12.926a1.409 1.409 0 001.407-1.406V14.79a1.42 1.42 0 112.84 0v9.252a4.253 4.253 0 01-4.247 4.248H7.736a4.253 4.253 0 01-4.248-4.248V14.79a1.421 1.421 0 012.142-1.262zm9.65-.23a2.828 2.828 0 11-2.164 5.225 2.828 2.828 0 012.164-5.225zM15.09.32l12.726 10.367a1.421 1.421 0 01-.9 2.523l.005-.003a1.413 1.413 0 01-.9-.32L14.193 3.252 2.366 12.887a1.421 1.421 0 11-1.795-2.2L13.296.32a1.42 1.42 0 011.795 0z"
          id={`home_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`home_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#home_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#home_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
