import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const ZoomIn = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M10.786 0c5.957 0 10.786 4.83 10.786 10.786a10.762 10.762 0 01-2.863 7.31 1.414 1.414 0 011.629.265l6.793 6.794a1.413 1.413 0 01-1 2.413v.001c-.375 0-.735-.148-1-.414l-6.793-6.794a1.414 1.414 0 01-.265-1.633 10.752 10.752 0 01-7.287 2.844C4.829 21.572 0 16.742 0 10.786 0 4.829 4.83 0 10.786 0zm0 2.827a7.958 7.958 0 107.959 7.959 7.968 7.968 0 00-7.959-7.959zm0 1.886c.78 0 1.414.633 1.414 1.414l-.001 3.244 3.081.001a1.414 1.414 0 010 2.828h-3.081l.001 3.245a1.414 1.414 0 01-2.828 0L9.371 12.2H6.095a1.414 1.414 0 010-2.828l3.276-.001.001-3.244c0-.78.633-1.414 1.414-1.414z"
          id={`zoom_in_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`zoom_in_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#zoom_in_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#zoom_in_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
