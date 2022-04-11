import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Visibility = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.231 0c.53 0 1.058.029 1.583.086a1.506 1.506 0 01-.327 2.995 11.583 11.583 0 00-1.256-.068c-4.418 0-8.575 2.601-11.012 6.84C5.656 14.09 9.813 16.69 14.23 16.69c4.423 0 8.585-2.606 11.02-6.851a13.767 13.767 0 00-6.985-6.103A1.505 1.505 0 1119.313.914a16.761 16.761 0 018.984 8.25l-.008-.014.009.017.002.004.022.046.021.045a1.505 1.505 0 01.083.923l-.009.03c-.007.036-.017.07-.028.104l-.016.044a1.31 1.31 0 01-.075.174c-2.887 5.654-8.277 9.167-14.067 9.167-5.789 0-11.179-3.513-14.067-9.167a1.505 1.505 0 01-.163-.617v-.054a1.445 1.445 0 01.047-.393c.027-.103.065-.204.114-.301l.002-.005C3.051 3.513 8.442 0 14.231 0zm1.9 5.265a4.964 4.964 0 11-3.8 9.172 4.964 4.964 0 013.8-9.172zm-1.9 2.45a2.135 2.135 0 10.002 4.268 2.135 2.135 0 00-.002-4.267v-.001z"
          id={`visibility_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 6)" fill="none" fillRule="evenodd">
        <mask id={`visibility_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#visibility_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#visibility_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-6h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
