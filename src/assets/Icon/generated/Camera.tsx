import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Camera = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M16.772 0a4.226 4.226 0 013.761 2.281l.423.811a1.41 1.41 0 001.254.76h1.825a4.247 4.247 0 014.242 4.242v11.019a4.247 4.247 0 01-4.242 4.244H4.242A4.247 4.247 0 010 19.115V8.094a4.247 4.247 0 014.242-4.242h1.825a1.41 1.41 0 001.254-.76l.421-.811A4.23 4.23 0 0111.504 0h5.268zm0 2.828h-5.268a1.41 1.41 0 00-1.254.76l-.421.81A4.231 4.231 0 016.067 6.68H4.242c-.78 0-1.413.633-1.414 1.414v11.019c0 .78.633 1.413 1.414 1.414h19.793c.78 0 1.413-.633 1.414-1.414V8.094c0-.78-.633-1.413-1.414-1.414H22.21a4.23 4.23 0 01-3.657-2.093l-.104-.188-.423-.811a1.409 1.409 0 00-1.254-.76zm-2.633 3.674a6.149 6.149 0 016.149 6.149 6.156 6.156 0 01-6.149 6.149 6.149 6.149 0 110-12.298zm0 2.828a3.321 3.321 0 100 6.642 3.321 3.321 0 000-6.642z"
          id={`camera_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`camera_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#camera_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#camera_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
