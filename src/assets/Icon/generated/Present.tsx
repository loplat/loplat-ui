import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Present = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M19.172 0a5.269 5.269 0 015.26 5.148h3.913a2.3 2.3 0 012.3 2.3v4.985a2.3 2.3 0 01-2.3 2.3H16.736v10.722h6.928c.925 0 1.675-.75 1.676-1.676v-6.786a1.415 1.415 0 012.828 0v6.783a4.509 4.509 0 01-4.505 4.503H6.979a4.51 4.51 0 01-4.5-4.5v-9.046H2.3a2.3 2.3 0 01-2.3-2.3V7.448a2.3 2.3 0 012.3-2.3h3.912l.003-.102A5.27 5.27 0 0111.474 0a5.255 5.255 0 013.849 1.678A5.256 5.256 0 0119.172 0zm-5.263 14.733H5.307v9.046c.001.925.75 1.675 1.676 1.676h6.926V14.733zm13.906-6.751H2.831v3.923h24.984V7.982zM11.474 2.828a2.438 2.438 0 00-2.433 2.32h4.864l-.001-.045a2.438 2.438 0 00-2.43-2.275zm7.698 0a2.438 2.438 0 00-2.433 2.32h4.863v-.045a2.438 2.438 0 00-2.43-2.275z"
          id={`present_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(1 2)" fill="none" fillRule="evenodd">
        <mask id={`present_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#present_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#present_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-1-2h32v32H-1z" />
        </g>
      </g>
    </Svg>
  );
});
