import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Card = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M24.036 0a4.247 4.247 0 014.242 4.242v3.977c0 .78-.633 1.414-1.414 1.414l-.079-.004H2.828v7.231c0 .78.633 1.413 1.413 1.414h19.795c.78 0 1.413-.633 1.414-1.414v-4.522a1.415 1.415 0 012.828 0v4.522a4.246 4.246 0 01-4.242 4.242H4.241A4.245 4.245 0 010 16.86V4.242A4.246 4.246 0 014.241 0h19.795zM12.325 12.641a1.414 1.414 0 110 2.827H6.608a1.414 1.414 0 010-2.827h5.717zm11.711-9.813H4.241a1.416 1.416 0 00-1.413 1.414v2.559h22.621l.001-2.559a1.416 1.416 0 00-1.414-1.414z"
          id={`card_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 5)" fill="none" fillRule="evenodd">
        <mask id={`card_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#card_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#card_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-5h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
