import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Redo = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M16.261.414l7.368 7.368a1.414 1.414 0 010 2l-7.368 7.368a1.414 1.414 0 01-2-2l4.954-4.954-9.705-.01h-.007a6.675 6.675 0 00-6.677 6.677v5.761a1.414 1.414 0 01-2.826 0v-5.76a9.507 9.507 0 019.5-9.506h.009l9.706.01-4.954-4.954a1.414 1.414 0 012-2z"
          id={`redo_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(4 4)" fill="none" fillRule="evenodd">
        <mask id={`redo_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#redo_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#redo_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-4-4h32v32H-4z" />
        </g>
      </g>
    </Svg>
  );
});
