import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const EmojiEvent = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M19.569 0a3.54 3.54 0 013.535 3.535V9.89a9.678 9.678 0 01-7.947 9.577v4.558l3.02.001c.065-.733.672-1.3 1.409-1.314A1.385 1.385 0 0121 24.091v.069a2.7 2.7 0 01-2.694 2.694H9.182a2.7 2.7 0 01-2.695-2.694 1.443 1.443 0 011.415-1.448 1.387 1.387 0 011.413 1.314l3.014-.001v-4.558A9.678 9.678 0 014.386 9.89V2.627a1.414 1.414 0 112.827 0V9.89a6.542 6.542 0 1013.064 0V3.535a.708.708 0 00-.707-.707H9.953a1.414 1.414 0 110-2.828h9.616zm6.505 3.513c.78 0 1.414.633 1.414 1.414v6.74a1.414 1.414 0 01-2.828 0v-6.74c0-.78.633-1.414 1.414-1.414zm-23.942.158c.443.261.71.742.696 1.256v6.74a1.414 1.414 0 11-2.827 0v-6.74a1.414 1.414 0 012.13-1.256z"
          id={`emoji_event_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 3)" fill="none" fillRule="evenodd">
        <mask id={`emoji_event_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#emoji_event_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#emoji_event_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-3h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
