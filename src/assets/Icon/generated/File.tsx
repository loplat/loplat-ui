import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const File = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.877 0c.365 0 .716.141.98.394l7.519 7.227c.277.267.434.634.434 1.019v15.4a4.247 4.247 0 01-4.242 4.243H4.242A4.247 4.247 0 010 24.041v-19.8A4.246 4.246 0 014.242 0h9.635zM4.242 2.833c-.78 0-1.413.633-1.414 1.413v19.8c0 .78.633 1.413 1.414 1.414h14.326c.78 0 1.413-.633 1.414-1.414l-.001-12.916h-4.876a3.539 3.539 0 01-3.535-3.535l-.001-4.758-7.327-.004zm14.75 5.469l-4.595-4.416.001 3.709c0 .39.317.706.707.707h3.887z"
          id={`file_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(5 2)" fill="none" fillRule="evenodd">
        <mask id={`file_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#file_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#file_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-5-2h32v32H-5z" />
        </g>
      </g>
    </Svg>
  );
});
