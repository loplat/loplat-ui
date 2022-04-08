import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Delete = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M26.9 0a1.414 1.414 0 01.14 2.824l-.14.004H1.453a1.414 1.414 0 110-2.827H26.9z"
          id={`delete_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 14.724)" fill="none" fillRule="evenodd">
        <mask id={`delete_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#delete_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#delete_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-14.724h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
