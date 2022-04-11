import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Clip = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M7.996 28.274a7.923 7.923 0 01-5.62-2.324 8.134 8.134 0 010-11.49l12.69-12.69a6.041 6.041 0 118.544 8.543l-12.1 12.1a4.047 4.047 0 01-5.724-5.723l8.478-8.477a1.414 1.414 0 112 2L7.787 18.69a1.219 1.219 0 101.724 1.723l12.1-12.1a3.214 3.214 0 00-4.545-4.545L4.375 16.458a5.3 5.3 0 000 7.491 5.119 5.119 0 007.24 0l9.19-9.189a1.414 1.414 0 112 2l-9.19 9.19a7.923 7.923 0 01-5.62 2.324z"
          id={`clip_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(3 2)" fill="none" fillRule="evenodd">
        <mask id={`clip_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#clip_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#clip_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-3-2h32v32H-3z" />
        </g>
      </g>
    </Svg>
  );
});
