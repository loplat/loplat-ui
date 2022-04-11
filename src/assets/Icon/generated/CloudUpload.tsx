import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const CloudUpload = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M17.213.18a9.387 9.387 0 017.566 9.212c0 .114 0 .229-.008.345a6.006 6.006 0 01-2.5 11.465h-4.15a1.414 1.414 0 010-2.828h4.147a3.179 3.179 0 00.679-6.284 1.412 1.412 0 01-1.094-1.612c.063-.359.097-.722.1-1.086a6.56 6.56 0 00-12.86-1.83 1.379 1.379 0 01-1.4 1.019 4.9 4.9 0 00.028 9.793l5.35-.001v-5.892l-1.998 1.999a1.059 1.059 0 11-1.496-1.5l3.8-3.8.016-.016c.024-.023.049-.045.075-.066l-.023.019.036-.028a1.058 1.058 0 011.473.166l3.728 3.725a1.06 1.06 0 01-1.5 1.5l-1.99-1.99v10.524a1.061 1.061 0 11-2.121 0V21.2h-5.35A7.725 7.725 0 016.71 5.82 9.387 9.387 0 0117.213.179z"
          id={`cloud_upload_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`cloud_upload_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#cloud_upload_svg__a__${uniqueId}`} />
        </mask>
        <use fill={fillColor} fillRule="nonzero" xlinkHref={`#cloud_upload_svg__a__${uniqueId}`} />
        <g mask={`url(#cloud_upload_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
