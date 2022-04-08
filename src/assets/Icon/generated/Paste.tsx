import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Paste = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M25.028 0a3.539 3.539 0 013.535 3.535v14.282a3.539 3.539 0 01-3.535 3.535h-3.676v3.433a3.539 3.539 0 01-3.535 3.537H3.535A3.539 3.539 0 010 24.787V10.503a3.539 3.539 0 013.535-3.535h3.676V3.535A3.539 3.539 0 0110.746 0h14.282zm-7.211 9.796l-9.153.001-.039.001-.039-.002H3.535a.708.708 0 00-.707.707v14.282c0 .39.317.706.707.707h14.282c.39 0 .706-.317.707-.707V10.503a.708.708 0 00-.707-.707zm7.211-6.968H10.746a.708.708 0 00-.707.707v3.433h7.778a3.539 3.539 0 013.535 3.535v8.021h3.676c.39 0 .706-.317.707-.707V3.535a.708.708 0 00-.707-.707z"
          id={`paste_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`paste_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#paste_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#paste_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
