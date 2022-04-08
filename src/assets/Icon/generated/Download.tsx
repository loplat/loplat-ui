import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Download = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M4.105 15.468a1.414 1.414 0 01.789 2.337l-1.737 2a1.347 1.347 0 00-.329.88v3.96c0 .465.377.842.842.842h20.3a.842.842 0 00.842-.841v-3.96c0-.324-.117-.637-.33-.881l-1.736-2a1.414 1.414 0 012.134-1.855l1.737 2a4.175 4.175 0 011.022 2.736v3.96a3.673 3.673 0 01-3.669 3.668H3.67A3.673 3.673 0 010 24.644v-3.96c0-1.005.363-1.976 1.023-2.734l1.737-2a1.414 1.414 0 011.345-.482zM14.536.196c.443.26.71.742.696 1.256l-.001 12.651 4.188-4.186a1.414 1.414 0 112 2l-6.6 6.6a1.409 1.409 0 01-1 .414 1.41 1.41 0 01-1-.414l-6.6-6.6a1.414 1.414 0 012-2l4.185 4.185.001-12.65A1.414 1.414 0 0114.536.196z"
          id={`download_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`download_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#download_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#download_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
