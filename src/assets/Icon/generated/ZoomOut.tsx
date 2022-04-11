import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const ZoomOut = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M10.786 0c5.957 0 10.786 4.83 10.786 10.786a10.762 10.762 0 01-2.855 7.301 1.41 1.41 0 011.621.269l6.793 6.794a1.414 1.414 0 01-1 2.414v.006c-.375 0-.735-.148-1-.414l-6.793-6.8a1.415 1.415 0 01-.27-1.624 10.75 10.75 0 01-7.282 2.84C4.829 21.572 0 16.742 0 10.786 0 4.829 4.83 0 10.786 0zm0 2.827a7.958 7.958 0 107.959 7.959 7.965 7.965 0 00-7.959-7.959zm4.5 6.545a1.413 1.413 0 110 2.827H6.1a1.413 1.413 0 110-2.827h9.186z"
          id={`zoom_out_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`zoom_out_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#zoom_out_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#zoom_out_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
