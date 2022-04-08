import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const LockOpen = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M17.551 2.83a1.414 1.414 0 11-2.291 1.658 4.014 4.014 0 00-7.246 2.758h11.68a4.954 4.954 0 014.949 4.947v11.162a4.955 4.955 0 01-4.949 4.95H4.949A4.955 4.955 0 010 23.354V12.193a4.954 4.954 0 014.949-4.948h.229A6.844 6.844 0 0117.55 2.83zM6.902 10.072v.001l-.019-.001H4.949c-1.17.002-2.12.95-2.121 2.121v11.162c.001 1.171.95 2.12 2.121 2.121h14.745a2.123 2.123 0 002.121-2.12V12.192a2.124 2.124 0 00-2.121-2.12l-12.792-.001zm7.467 6.288a1.414 1.414 0 010 2.828h-4.091a1.414 1.414 0 010-2.828h4.091z"
          id={`lock_open_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(4 2)" fill="none" fillRule="evenodd">
        <mask id={`lock_open_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#lock_open_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#lock_open_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-4-2h32v32H-4z" />
        </g>
      </g>
    </Svg>
  );
});
