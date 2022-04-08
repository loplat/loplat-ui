import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Undo = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M9.782.414a1.414 1.414 0 010 2L4.827 7.37l9.71-.01a9.559 9.559 0 016.726 2.781 9.44 9.44 0 012.788 6.724v5.761a1.414 1.414 0 01-1.417 1.413c-.78 0-1.414-.633-1.414-1.414v-5.76a6.675 6.675 0 00-6.677-6.677h-.007l-9.707.01 4.953 4.953a1.414 1.414 0 01-1 2.413v.001c-.375 0-.735-.148-1-.414L.414 9.782a1.414 1.414 0 010-2L7.782.414a1.414 1.414 0 012 0z"
          id={`undo_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(4 4)" fill="none" fillRule="evenodd">
        <mask id={`undo_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#undo_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#undo_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-4-4h32v32H-4z" />
        </g>
      </g>
    </Svg>
  );
});
