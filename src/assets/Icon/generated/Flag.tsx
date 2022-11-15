import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Flag = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M1.414 28.277c-.78 0-1.414-.633-1.414-1.414V5.655A5.662 5.662 0 015.656 0h15.162a1.413 1.413 0 011.277 2.017l-3.1 6.543 3.1 6.543a1.413 1.413 0 01-1.277 2.02H6.727a1.414 1.414 0 010-2.828h11.857l-2.432-5.129a1.414 1.414 0 010-1.212l2.432-5.129H5.656a2.831 2.831 0 00-2.828 2.828v21.208a1.414 1.414 0 01-1.414 1.416z"
          id={`flag_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(5 2)" fill="none" fillRule="evenodd">
        <mask id={`flag_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#flag_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#flag_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-5-2h32v32H-5z" />
        </g>
      </g>
    </Svg>
  );
});
