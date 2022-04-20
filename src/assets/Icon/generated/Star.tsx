import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Star = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M22.574 27.837c-.23 0-.457-.057-.66-.164L14.49 23.75 7.07 27.673a1.414 1.414 0 01-2.054-1.488l1.42-8.318-6.01-5.89a1.414 1.414 0 01.784-2.41l8.3-1.211L13.222.792a1.413 1.413 0 012.538 0l3.714 7.564 8.3 1.212a1.414 1.414 0 01.785 2.409l-6.01 5.89 1.42 8.318a1.415 1.415 0 01-1.395 1.652zm-8.083-7.1c.23 0 .458.055.661.163l5.546 2.93-1.06-6.218c-.08-.457.07-.923.4-1.248l4.5-4.411-6.215-.908a1.41 1.41 0 01-1.064-.776l-2.773-5.646-2.772 5.646c-.205.418-.603.709-1.065.776l-6.214.908 4.5 4.41c.33.326.48.792.4 1.249l-1.06 6.219L13.82 20.9c.207-.11.438-.165.671-.162v-.001z"
          id={`star_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`star_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#star_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#star_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
