import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Block = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M25.888 6.29a14.132 14.132 0 01-1.767 17.841 14.095 14.095 0 01-10 4.134 14.116 14.116 0 01-10.034-4.191A14.132 14.132 0 1125.889 6.29zm-2.828.907L7.193 23.062A11.306 11.306 0 0023.06 7.197zm-8.938-4.37a11.306 11.306 0 00-8.927 18.234L21.06 5.197a11.277 11.277 0 00-6.937-2.37z"
          id={`block_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`block_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#block_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#block_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
