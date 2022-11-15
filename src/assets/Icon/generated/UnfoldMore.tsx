import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const UnfoldMore = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M2.415 16.378l7.941 7.8 7.941-7.8a1.414 1.414 0 111.982 2.018l-8.932 8.769a1.41 1.41 0 01-1.98 0l-8.933-8.77a1.414 1.414 0 111.981-2.017zM11.347.405l8.932 8.769a1.414 1.414 0 11-1.982 2.018l-7.94-7.8-7.942 7.8a1.414 1.414 0 01-1.98-2.018L9.365.404c.55-.539 1.431-.539 1.981 0z"
          id={`unfold_more_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(6 2)" fill="none" fillRule="evenodd">
        <mask id={`unfold_more_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#unfold_more_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#unfold_more_svg__b__${uniqueId})`} fillRule="nonzero">
          <path d="M15.552 1.077a14.14 14.14 0 018.728 13.064c-.008 7.806-6.334 14.131-14.14 14.14a14.14 14.14 0 115.412-27.204zm-5.412 10.48c-.78 0-1.414.632-1.414 1.413v7.172a1.415 1.415 0 002.828 0V12.97c0-.78-.633-1.414-1.414-1.414zm0-4.942a1.488 1.488 0 100 2.976 1.488 1.488 0 000-2.976z" />
        </g>
        <g mask={`url(#unfold_more_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-6-2h32v32H-6z" />
        </g>
      </g>
    </Svg>
  );
});
