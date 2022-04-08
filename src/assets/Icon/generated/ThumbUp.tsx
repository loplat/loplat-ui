import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const ThumbUp = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.742 0a4.476 4.476 0 014.506 4.46v4.2h5.609a4.419 4.419 0 014.368 5.1l-1.466 9.46a4.487 4.487 0 01-4.457 3.808h-9.71a1.414 1.414 0 010-2.828h9.71a1.674 1.674 0 001.663-1.425l1.465-9.458a1.592 1.592 0 00-1.573-1.837h-7.023c-.78 0-1.414-.633-1.414-1.414v-5.61a1.634 1.634 0 00-1.632-1.633.247.247 0 00-.273.194 30.454 30.454 0 01-2.676 8.4l-.776 1.588.001 12.622a1.414 1.414 0 01-1.571 1.405l-5.147-.002A3.349 3.349 0 010 23.685v-9.1a3.35 3.35 0 013.346-3.345h4.433l.518-1.063a27.589 27.589 0 002.427-7.61A3.045 3.045 0 0113.742 0zM7.235 24.202V14.068H3.346a.518.518 0 00-.518.517v9.1c0 .286.232.517.518.517h3.889z"
          id={`thumb_up_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`thumb_up_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#thumb_up_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#thumb_up_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
