import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const CloudDownload = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M17.221.18a9.388 9.388 0 017.567 9.211c0 .114 0 .23-.008.345a6.006 6.006 0 01-2.5 11.465h-4.151a1.414 1.414 0 010-2.828h4.147a3.179 3.179 0 00.68-6.284 1.414 1.414 0 01-1.1-1.615c.063-.357.097-.72.1-1.083a6.56 6.56 0 00-12.86-1.83 1.369 1.369 0 01-1.4 1.018 4.9 4.9 0 00.027 9.794h5.357V13.71a1.06 1.06 0 012.122 0L15.2 24.245l2-1.999a1.06 1.06 0 111.5 1.5l-3.8 3.8a1.057 1.057 0 01-.988.287 1.268 1.268 0 01-.12-.035l-.029-.01a1.008 1.008 0 01-.314-.186l-.035-.033a.527.527 0 01-.024-.023l-3.8-3.8a1.06 1.06 0 011.5-1.5l1.989 1.99-.001-3.035h-5.35A7.725 7.725 0 016.718 5.817 9.388 9.388 0 0117.22.18z"
          id={`cloud_download_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`cloud_download_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#cloud_download_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#cloud_download_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
