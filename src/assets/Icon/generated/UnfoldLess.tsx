import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const UnfoldLess = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M11.348 16.389l8.932 8.769a1.414 1.414 0 01-1.982 2.018l-7.94-7.8-7.943 7.8a1.414 1.414 0 11-1.981-2.018l8.932-8.77c.55-.54 1.432-.54 1.982 0zM2.415.416l7.942 7.8 7.941-7.8a1.414 1.414 0 011.982 2.018l-8.932 8.769a1.412 1.412 0 01-1.982 0L.434 2.433A1.414 1.414 0 112.415.417z"
          id={`unfold_less_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(6 2)" fill="none" fillRule="evenodd">
        <mask id={`unfold_less_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#unfold_less_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#unfold_less_svg__b__${uniqueId})`} fillRule="nonzero">
          <path d="M15.552 1.077a14.14 14.14 0 018.728 13.064c-.008 7.806-6.334 14.131-14.14 14.14a14.14 14.14 0 115.412-27.204zm-5.412 10.48c-.78 0-1.414.632-1.414 1.413v7.172a1.415 1.415 0 002.828 0V12.97c0-.78-.633-1.414-1.414-1.414zm0-4.942a1.488 1.488 0 100 2.976 1.488 1.488 0 000-2.976z" />
        </g>
        <g mask={`url(#unfold_less_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-6-2h32v32H-6z" />
        </g>
      </g>
    </Svg>
  );
});
