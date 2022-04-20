import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Chart = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M8.582 0a1.414 1.414 0 010 2.828H2.827l-.001 12.113 7.627-7.625a1.414 1.414 0 012 0l3.256 3.256 7.744-7.744h-3.919a1.414 1.414 0 010-2.828h7.338a1.385 1.385 0 01.601.137l.033.017c.027.013.054.028.08.044l.037.023c.025.015.05.032.074.05l.033.025.07.056c.01.012.023.023.035.034L27.85.4l.015.015c.288.288.425.668.413 1.045l-.001 7.284a1.414 1.414 0 11-2.827 0V4.829l-8.744 8.742a1.414 1.414 0 01-2 0l-3.256-3.256-8.625 8.625.001 3H25.45v-3.1a1.413 1.413 0 112.827 0v4.512a1.414 1.414 0 01-1.412 1.416H1.414c-.78 0-1.414-.633-1.414-1.414V1.414C0 .634.633.001 1.414 0h7.168z"
          id={`chart_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`chart_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#chart_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#chart_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
