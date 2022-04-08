import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const ChevronLeft = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.795 27.57a1.408 1.408 0 01-1-.414L.413 14.786a1.416 1.416 0 010-2L12.795.413a1.414 1.414 0 012 2l-11.38 11.37 11.38 11.371a1.413 1.413 0 01-1 2.414z"
          id={`chevron_left_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(8 2)" fill="none" fillRule="evenodd">
        <mask id={`chevron_left_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#chevron_left_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#chevron_left_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-8-2h32v32H-8z" />
        </g>
      </g>
    </Svg>
  );
});
