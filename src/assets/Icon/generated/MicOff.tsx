import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const MicOff = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M27.864.419a1.414 1.414 0 010 2l-8.446 8.445v3.635a5.284 5.284 0 01-5.278 5.278 5.28 5.28 0 01-2.815-.818l-1.766 1.766a7.613 7.613 0 004.292 1.512l.243.003.046-.001.044.001.2-.002a7.7 7.7 0 007.445-7.685 1.414 1.414 0 112.827 0c-.006 5.326-3.965 9.725-9.101 10.421v1.896a1.414 1.414 0 01-2.829-.001v-1.891a10.42 10.42 0 01-5.182-2.237l-5.13 5.129a1.414 1.414 0 01-2-2.001L25.864.419a1.414 1.414 0 012 0zM5.744 13.325c.438.253.707.72.707 1.225a7.7 7.7 0 00.285 2.082 1.415 1.415 0 01-1.362 1.8v-.003c-.633 0-1.19-.422-1.36-1.032-.26-.927-.391-1.885-.39-2.847a1.414 1.414 0 012.12-1.225zm10.846.367l-3.15 3.152a2.444 2.444 0 003.15-2.347v-.805zm2.721-9.471c.019.093.028.188.028.283v.219a1.414 1.414 0 01-2.828 0v-.06a2.45 2.45 0 00-4.82.62v6.952a1.414 1.414 0 01-2.829 0V5.283a5.278 5.278 0 0110.45-1.062z"
          id={`mic_off_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`mic_off_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#mic_off_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#mic_off_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
