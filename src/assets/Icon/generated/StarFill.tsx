import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const StarFill = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M22.574 27.837c-.23 0-.457-.057-.66-.164L14.49 23.75 7.07 27.673a1.414 1.414 0 01-2.054-1.488l1.42-8.318-6.01-5.89a1.414 1.414 0 01.784-2.41l8.3-1.211L13.222.792a1.413 1.413 0 012.538 0l3.714 7.564 8.3 1.212a1.414 1.414 0 01.785 2.409l-6.01 5.89 1.42 8.318a1.415 1.415 0 01-1.395 1.652z"
          id={`star-fill_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`star-fill_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#star-fill_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#star-fill_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
