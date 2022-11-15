import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const ChartPie = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M11.527 4.946c.78 0 1.414.633 1.414 1.414v8.7h8.7c.78 0 1.414.633 1.414 1.414-.008 6.265-5.007 11.36-11.235 11.522l-.293.004C5.161 28 0 22.84 0 16.473 0 10.107 5.16 4.946 11.527 4.946zm-1.414 2.943a8.7 8.7 0 1010 10h-8.585c-.78 0-1.414-.633-1.414-1.414l-.001-8.586zM16.752 0c6.363.008 11.519 5.164 11.526 11.527a1.414 1.414 0 01-1.413 1.411H16.752c-.78 0-1.414-.633-1.414-1.414V1.414c0-.78.633-1.414 1.414-1.414zm1.413 2.94v7.17h7.17a8.721 8.721 0 00-7.17-7.17z"
          id={`chart_pie_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`chart_pie_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#chart_pie_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#chart_pie_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
