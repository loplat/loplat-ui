import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Call = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M18.353 28.27a12.208 12.208 0 01-8.658-3.58l-6.114-6.114c-4.775-4.785-4.775-12.532 0-17.316a4.309 4.309 0 016.09 0l1.964 1.965a4.306 4.306 0 010 6.089l-1.064 1.062a2.2 2.2 0 000 3.113l4.211 4.21a2.2 2.2 0 003.113 0l1.063-1.062a4.307 4.307 0 016.09 0l1.964 1.964a4.31 4.31 0 010 6.089 12.2 12.2 0 01-8.659 3.58zM6.63 2.827a1.468 1.468 0 00-1.045.433 9.427 9.427 0 000 13.317l6.115 6.116a9.429 9.429 0 0013.317 0 1.481 1.481 0 000-2.092l-1.965-1.964a1.514 1.514 0 00-2.089 0L19.9 19.699a5.033 5.033 0 01-7.11 0l-4.212-4.21a5.034 5.034 0 010-7.112L9.64 7.314a1.476 1.476 0 000-2.09L7.676 3.26a1.47 1.47 0 00-1.046-.433z"
          id={`call_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`call_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#call_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#call_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
