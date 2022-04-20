import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Gps = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.137 0c.767 0 1.394.61 1.414 1.376v2.121a10.7 10.7 0 019.194 9.19h2.117a1.414 1.414 0 010 2.828h-2.118a10.713 10.713 0 01-9.192 9.187v2.12a1.414 1.414 0 11-2.828.003v-2.123a10.701 10.701 0 01-9.183-9.186H1.414a1.414 1.414 0 110-2.829H3.54A10.701 10.701 0 0112.724 3.5V1.376A1.414 1.414 0 0114.137 0zm1.415 6.362l-.001 1.902a1.414 1.414 0 11-2.827 0V6.362A7.868 7.868 0 006.4 12.688H8.3a1.414 1.414 0 010 2.827H6.399a7.86 7.86 0 002.176 4.15 7.86 7.86 0 004.15 2.175l-.001-1.907a1.414 1.414 0 012.828 0v1.908a7.868 7.868 0 006.325-6.325h-1.902a1.414 1.414 0 110-2.829h1.902a7.884 7.884 0 00-6.325-6.325z"
          id={`gps_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`gps_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#gps_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#gps_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
