import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const VolumeOff = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.124.173a2.122 2.122 0 011.282 1.95V16.83a2.124 2.124 0 01-2.123 2.122v.002a2.116 2.116 0 01-1.455-.578l-3.889-3.67a.708.708 0 00-.488-.195H3.538A3.542 3.542 0 010 10.972V7.98a3.543 3.543 0 013.538-3.539h2.913a.71.71 0 00.488-.193L10.827.58a2.122 2.122 0 012.297-.406zm14.741 3.724a1.414 1.414 0 010 2l-3.581 3.581 3.58 3.58a1.414 1.414 0 01-.858 2.407l-.141.007a1.41 1.41 0 01-1-.414l-3.58-3.58-3.58 3.58a1.414 1.414 0 11-2.001-2l3.58-3.58-3.58-3.58a1.414 1.414 0 012-2l3.58 3.58 3.581-3.58a1.414 1.414 0 012 0zM11.581 3.76l-2.7 2.546a3.526 3.526 0 01-2.43.965H3.538a.712.712 0 00-.71.711v2.99c0 .393.318.711.71.712h2.913a3.521 3.521 0 012.43.966l2.7 2.546V3.76z"
          id={`volume_off_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 7)" fill="none" fillRule="evenodd">
        <mask id={`volume_off_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#volume_off_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#volume_off_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-7h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
