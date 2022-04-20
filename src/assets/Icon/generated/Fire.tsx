import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Fire = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M11.473 28.28C5.14 28.273.008 23.14 0 16.809a10.879 10.879 0 011.248-5.2c.375-.69.786-1.3 1.149-1.831.93-1.377 1.549-2.291 1.428-3.934 0-.032-.007-.064-.008-.1a1.428 1.428 0 011.316-1.5 1.4 1.4 0 01.74.157A8.9 8.9 0 018.92 6.347c0-.208.002-.426.005-.655a17.593 17.593 0 00-.275-3.885A1.423 1.423 0 0110.404.053c7.97 2.336 12.54 8.44 12.54 16.75-.003 6.335-5.136 11.47-11.471 11.477zM6.465 7.96a10.506 10.506 0 01-1.726 3.407c-.342.507-.7 1.03-1.007 1.6a8.047 8.047 0 00-.9 3.842 8.645 8.645 0 0017.289 0c0-7.983-4.617-11.632-8.422-13.283.035.6.057 1.313.057 2.172a17.635 17.635 0 01-.413 5.017 1.414 1.414 0 01-2.631.085 8.564 8.564 0 00-1.727-2.39 7.159 7.159 0 00-.518-.45h-.002z"
          id={`fire_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(5 2)" fill="none" fillRule="evenodd">
        <mask id={`fire_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#fire_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#fire_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-5-2h32v32H-5z" />
        </g>
      </g>
    </Svg>
  );
});
