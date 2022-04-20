import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const ArrowDown = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.81 0a1.412 1.412 0 011.411 1.415L15.2 22.74l9.958-9.957a1.414 1.414 0 012 2l-12.37 12.372a1.409 1.409 0 01-1.659.252 1.092 1.092 0 01-.108-.063 1.24 1.24 0 01-.073-.05l-.026-.02a1.24 1.24 0 01-.136-.119L.415 14.783a1.414 1.414 0 012-2l9.959 9.959.022-21.33c0-.734.561-1.337 1.277-1.406L13.81 0z"
          id={`arrow_down_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2.001 2.001)" fill="none" fillRule="evenodd">
        <mask id={`arrow_down_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#arrow_down_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#arrow_down_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2.001-2.001h32v32h-32z" />
        </g>
      </g>
    </Svg>
  );
});
