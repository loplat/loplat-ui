import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const ChevronUp = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M26.156 15.193a1.41 1.41 0 01-1-.414L13.786 3.4 2.413 14.778a1.414 1.414 0 11-2-2L12.785.397a1.457 1.457 0 012 0L27.157 12.78a1.414 1.414 0 01-1 2.413v.001z"
          id={`chevron_up_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 8)" fill="none" fillRule="evenodd">
        <mask id={`chevron_up_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#chevron_up_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#chevron_up_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-8h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
