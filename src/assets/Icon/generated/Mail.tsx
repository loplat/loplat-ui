import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Mail = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M26.863 0a1.413 1.413 0 01.988 2.425l-.687.672c-.08.123-.179.234-.296.329l-11.841 9.618a1.413 1.413 0 01-.892.313 1.41 1.41 0 01-.893-.318L2.825 4.543v13.81c0 .78.633 1.413 1.413 1.414h19.794c.78 0 1.413-.633 1.414-1.414V7.875a1.414 1.414 0 012.828 0v10.478a4.247 4.247 0 01-4.242 4.242H4.241A4.246 4.246 0 010 18.353V3.535A3.539 3.539 0 013.534 0h23.329zm-3.751 2.828H5.193l8.94 7.292 8.979-7.292z"
          id={`mail_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 5)" fill="none" fillRule="evenodd">
        <mask id={`mail_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#mail_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#mail_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-5h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
