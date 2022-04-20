import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Tag = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M25.402 0c.781 0 1.414.633 1.414 1.414v11.161a3.508 3.508 0 01-1.035 2.5L15.488 25.368a4.913 4.913 0 01-3.5 1.448 4.913 4.913 0 01-3.5-1.449L1.45 18.329a4.948 4.948 0 010-7L11.743 1.035A3.559 3.559 0 0114.243 0h11.16zm-1.414 2.83h-9.746a.711.711 0 00-.5.207L3.45 13.329a2.122 2.122 0 00-.118 2.872l.118.128 7.04 7.038c.839.802 2.16.802 3 0l10.292-10.292a.7.7 0 00.206-.5V2.83zm-5.544 3.057a2.474 2.474 0 11.001 4.948 2.474 2.474 0 01-.001-4.948z"
          id={`tag_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(3 3)" fill="none" fillRule="evenodd">
        <mask id={`tag_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#tag_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#tag_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-3-3h32v32H-3z" />
        </g>
      </g>
    </Svg>
  );
});
