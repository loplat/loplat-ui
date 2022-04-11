import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Fullscreen = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M1.25 15c.69 0 1.25.56 1.25 1.25V23h6.75a1.25 1.25 0 010 2.5h-8C.56 25.5 0 24.94 0 24.25v-8C0 15.56.56 15 1.25 15zm23 0c.69 0 1.25.56 1.25 1.25v8c0 .69-.56 1.25-1.25 1.25h-8a1.25 1.25 0 010-2.5H23v-6.75c0-.69.56-1.25 1.25-1.25zm-15-15a1.25 1.25 0 010 2.5H2.5v6.75a1.25 1.25 0 01-2.5 0v-8C0 .56.56 0 1.25 0h8zm15 0c.69 0 1.25.56 1.25 1.25v8a1.25 1.25 0 01-2.5 0V2.5h-6.75a1.25 1.25 0 010-2.5h8z"
          id={`fullscreen_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(3 3)" fill="none" fillRule="evenodd">
        <mask id={`fullscreen_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#fullscreen_svg__a__${uniqueId}`} />
        </mask>
        <use fill="#000" xlinkHref={`#fullscreen_svg__a__${uniqueId}`} />
        <g mask={`url(#fullscreen_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-3-3h32v32H-3z" />
        </g>
      </g>
    </Svg>
  );
});
