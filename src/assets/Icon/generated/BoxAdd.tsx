import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const BoxAdd = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.067 4.326a1.414 1.414 0 010 2.828H4.242c-.78 0-1.413.633-1.414 1.414v15.6c.001.78.634 1.413 1.414 1.414h15.6a1.416 1.416 0 001.414-1.414v-9.939a1.414 1.414 0 012.828 0v9.939a4.246 4.246 0 01-4.242 4.241h-15.6A4.246 4.246 0 010 24.168v-15.6a4.247 4.247 0 014.242-4.242h9.825zM22.669 0c.78 0 1.414.633 1.414 1.414l-.001 2.842 2.785.001a1.414 1.414 0 010 2.828h-2.785l.001 2.847a1.414 1.414 0 01-2.828 0l-.001-2.847h-2.787a1.414 1.414 0 010-2.828l2.787-.001.001-2.842c0-.78.633-1.414 1.414-1.414z"
          id={`box_add_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`box_add_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#box_add_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#box_add_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
