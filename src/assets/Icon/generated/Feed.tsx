import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Feed = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M19.255 0a3.539 3.539 0 013.535 3.535v14.812c0 .704.547 1.28 1.24 1.328l.093-.002.049.002.077-.003a1.331 1.331 0 001.203-1.325v-12.7a1.414 1.414 0 01.037-2.827h1.377c.78 0 1.413.633 1.413 1.414v14.117a4.161 4.161 0 01-3.949 4.148l-.207.005H4.243a4.247 4.247 0 01-4.242-4.242V7.159a1.414 1.414 0 112.828 0v11.1c0 .78.633 1.413 1.414 1.414l15.937.001a4.158 4.158 0 01-.218-1.327V3.535a.708.708 0 00-.707-.707H3.535a.708.708 0 00-.707.707 1.414 1.414 0 11-2.828 0A3.539 3.539 0 013.535 0h15.72zm-3.368 14.487a1.413 1.413 0 110 2.827H6.726a1.413 1.413 0 110-2.827h9.161zm.089-4.649a1.414 1.414 0 010 2.828H6.815a1.414 1.414 0 010-2.828h9.161zm-.041-4.648a1.414 1.414 0 010 2.828H6.774a1.414 1.414 0 010-2.828h9.161z"
          id={`feed_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2.028 5.002)" fill="none" fillRule="evenodd">
        <mask id={`feed_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#feed_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#feed_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2.028-5.002h32v32h-32z" />
        </g>
      </g>
    </Svg>
  );
});
