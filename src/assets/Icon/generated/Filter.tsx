import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Filter = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M9.059 28.284c-.78 0-1.414-.633-1.414-1.414V15.595a1.42 1.42 0 00-.443-1.027L1.329 9.016A4.256 4.256 0 010 5.933V1.418a1.414 1.414 0 012.828 0v4.515c.001.389.161.76.443 1.028l5.873 5.551a4.258 4.258 0 011.329 3.083v9.189l3.884-1.546V15.6a4.253 4.253 0 011.338-3.091l5.908-5.55a1.42 1.42 0 00.445-1.031v-3.1H5.915a1.414 1.414 0 110-2.828h17.547c.78 0 1.414.633 1.414 1.414v4.51a4.257 4.257 0 01-1.338 3.092l-5.907 5.55a1.42 1.42 0 00-.446 1.03v8.6c0 .579-.353 1.1-.891 1.314l-6.712 2.672a1.416 1.416 0 01-.523.102z"
          id={`filter_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(4 2)" fill="none" fillRule="evenodd">
        <mask id={`filter_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#filter_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#filter_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-4-2h32v32H-4z" />
        </g>
      </g>
    </Svg>
  );
});
