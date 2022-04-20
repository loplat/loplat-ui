import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const FileAdd = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.877 0c.365 0 .716.141.98.394l7.519 7.227c.277.267.434.634.434 1.019v2.715a1.414 1.414 0 01-2.828 0l-.001-.225h-4.872a3.539 3.539 0 01-3.535-3.535l-.001-4.767H4.242a1.416 1.416 0 00-1.414 1.413v19.8c.001.78.634 1.413 1.414 1.414h14.327a1.414 1.414 0 110 2.828H4.242A4.247 4.247 0 010 24.041v-19.8A4.246 4.246 0 014.242 0h9.635zm8.264 13.884c.437.253.707.72.707 1.225l-.001 3.246h3.084a1.414 1.414 0 110 2.828h-3.084l.001 3.244a1.414 1.414 0 01-2.828 0l-.001-3.244h-3.274a1.414 1.414 0 010-2.828h3.274l.001-3.246a1.414 1.414 0 012.121-1.225zM14.401 3.88l.001 3.716c0 .39.317.706.707.707h3.894l-4.602-4.423z"
          id={`file_add_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`file_add_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#file_add_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#file_add_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
