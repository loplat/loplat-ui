import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Tune = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.291 19.005c.576.238 1.041.654 1.343 1.168h11.56a1.414 1.414 0 010 2.828h-11.56a2.793 2.793 0 11-1.342-3.996zm-6.346 1.168a1.414 1.414 0 010 2.828h-5.5a1.414 1.414 0 110-2.828h5.5zM19.828 9.607a2.794 2.794 0 11-3.478 3.995H1.452a1.414 1.414 0 110-2.828h14.9a2.792 2.792 0 013.476-1.167zm6.366 1.167a1.414 1.414 0 110 2.827h-2.472a1.414 1.414 0 110-2.827h2.472zM15.25.212c.575.238 1.04.653 1.342 1.167h9.6a1.414 1.414 0 010 2.828h-9.6A2.793 2.793 0 1115.25.211zM8.835 1.379a1.414 1.414 0 110 2.828H1.452a1.414 1.414 0 110-2.828h7.383z"
          id={`tune_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`tune_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#tune_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#tune_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
