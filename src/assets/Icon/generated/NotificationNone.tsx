import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const NotificationNone = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M16.492 26.673a3.188 3.188 0 01-2.582 1.629l-.202.006-.199-.006a3.19 3.19 0 01-2.987-3.127l-9.108-.001a1.414 1.414 0 01-1.075-2.332c1.846-2.165 2.783-5.125 2.783-8.8v-2.994a11.416 11.416 0 01.767-4.135 1.414 1.414 0 012.637 1.021 8.581 8.581 0 00-.577 3.114v2.994a17.378 17.378 0 01-1.87 8.3h19.263a17.366 17.366 0 01-1.87-8.3v-2.994a8.01 8.01 0 00-7.761-8.22 7.5 7.5 0 00-5.6 2.529 1.414 1.414 0 11-2.094-1.9A10.288 10.288 0 0113.71 0C19.682.136 24.418 5.078 24.3 11.05v2.994c0 3.673.936 6.633 2.783 8.8a1.414 1.414 0 01-1.076 2.332v-.002h-9.112a3.185 3.185 0 01-.403 1.499z"
          id={`notification_none_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`notification_none_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#notification_none_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#notification_none_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
