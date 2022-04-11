import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const DoneAll = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M21.307.414a1.414 1.414 0 010 2l-8.31 8.309 1.28 1.28L25.868.415a1.414 1.414 0 112 2L15.276 15.008a1.41 1.41 0 01-1 .408 1.41 1.41 0 01-1-.414l-3.258-3.257a1.414 1.414 0 01-.041-.04l-3-3.003a1.414 1.414 0 112-2l2.02 2.021 8.31-8.309a1.414 1.414 0 012 0zM2.414 6.702l6.3 6.3a1.413 1.413 0 01-1 2.413v.001c-.375.001-.735-.148-1-.414l-6.3-6.3a1.414 1.414 0 012-2z"
          id={`done_all_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 8)" fill="none" fillRule="evenodd">
        <mask id={`done_all_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#done_all_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#done_all_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-8h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
