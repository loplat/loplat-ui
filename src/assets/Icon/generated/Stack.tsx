import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Stack = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.905.243l12.78 8.617a1.414 1.414 0 010 2.343l-4.347 2.948 4.344 2.934a1.413 1.413 0 010 2.342l-12.7 8.617a1.419 1.419 0 01-1.58-.003L.621 19.424a1.414 1.414 0 010-2.342l2.917-1.98a1.414 1.414 0 111.588 2.339l-1.189.807 10.254 6.914 10.176-6.906-3.548-2.394-5.834 3.965a1.41 1.41 0 01-.794.24c-.281 0-.557-.084-.79-.241l-6.708-4.523-6.073-4.1a1.414 1.414 0 010-2.342l12.7-8.618a1.414 1.414 0 011.584 0zm-.793 2.882L3.935 10.032l4.34 2.926 5.914 3.988 5.833-3.96 4.343-2.946-10.253-6.915z"
          id={`stack_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`stack_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#stack_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#stack_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
