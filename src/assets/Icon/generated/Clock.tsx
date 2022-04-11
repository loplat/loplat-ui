import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Clock = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.142 0c7.808.001 14.137 6.333 14.136 14.141-.01 7.806-6.337 14.13-14.143 14.137C6.327 28.276-.002 21.944 0 14.136.002 6.327 6.333-.001 14.142 0zm-.007 2.827C7.889 2.829 2.827 7.894 2.828 14.14c0 6.246 5.064 11.309 11.31 11.309s11.31-5.062 11.312-11.308c-.006-6.246-5.069-11.308-11.315-11.314zm0 2.726c.78 0 1.414.633 1.414 1.414v5.758h5.293a1.414 1.414 0 010 2.828h-6.707c-.78 0-1.414-.633-1.414-1.414V6.967c0-.78.633-1.414 1.414-1.414z"
          id={`clock_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`clock_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#clock_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#clock_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
