import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Share = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M20.814.337a4.422 4.422 0 11-4.281 7.67l-7.488 6.697a4.766 4.766 0 01.248 3.58l11.066 4.082a4.228 4.228 0 11-.465 2.843l-12.335-4.55a4.765 4.765 0 11-.456-8.011l7.782-6.96A4.422 4.422 0 0120.814.336zm3.235 22.692a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8zM4.765 14.862v.003a1.937 1.937 0 101.937 1.937 1.94 1.94 0 00-1.937-1.94zM19.123 2.83a1.594 1.594 0 10-.002 3.188 1.594 1.594 0 00.002-3.188z"
          id={`share_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`share_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#share_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#share_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
