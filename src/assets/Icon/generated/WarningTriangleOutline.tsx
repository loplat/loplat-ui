import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const WarningTriangleOutline = React.memo<IconProps>(
  ({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
            d="M14.575 4.116a3.817 3.817 0 015.137 1.346l.003.007 10.342 17.264.011.02a3.816 3.816 0 01-3.263 5.725H6.09a3.818 3.818 0 01-3.263-5.726l.011-.019 10.346-17.27c.34-.562.819-1.025 1.39-1.347zm1.873 2.259a1.067 1.067 0 00-.91.511l-.002.003L5.205 24.135a1.067 1.067 0 00.91 1.593h20.666a1.066 1.066 0 00.91-1.593L17.361 6.89l-.002-.003a1.067 1.067 0 00-.911-.511z"
            id={`warning_triangle_outline_svg__a__${uniqueId}`}
          />
          <path
            d="M16.448 11.076c.76 0 1.375.616 1.375 1.375v4.884a1.375 1.375 0 11-2.75 0v-4.884c0-.76.616-1.375 1.375-1.375z"
            id={`warning_triangle_outline_svg__b__${uniqueId}`}
          />
          <path
            d="M15.073 22.219c0-.76.616-1.375 1.375-1.375h.012a1.375 1.375 0 010 2.75h-.012c-.76 0-1.375-.616-1.375-1.375z"
            id={`warning_triangle_outline_svg__c__${uniqueId}`}
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <mask id={`warning_triangle_outline_svg__d__${uniqueId}`} fill="#fff">
            <use xlinkHref={`#warning_triangle_outline_svg__a__${uniqueId}`} />
            <use xlinkHref={`#warning_triangle_outline_svg__b__${uniqueId}`} />
            <use xlinkHref={`#warning_triangle_outline_svg__c__${uniqueId}`} />
          </mask>
          <g mask={`url(#warning_triangle_outline_svg__d__${uniqueId})`}>
            <path fill={fillColor} d="M0 0h32v32H0z" />
          </g>
        </g>
      </Svg>
    );
  },
);
