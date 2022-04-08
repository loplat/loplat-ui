import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const ArrowUp = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.326.108c.173.07.33.174.464.308l.027.03 12.34 12.34a1.414 1.414 0 01-1 2.413v.001c-.375.001-.735-.148-1-.415L15.2 4.827l-.022 21.33c0 .735-.561 1.338-1.278 1.407l-.136.006a1.415 1.415 0 01-1.413-1.415l.022-21.328-9.958 9.958a1.414 1.414 0 11-2-2L12.785.415a1.414 1.414 0 011.416-.353l.125.046z"
          id={`arrow_up_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`arrow_up_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#arrow_up_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#arrow_up_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
