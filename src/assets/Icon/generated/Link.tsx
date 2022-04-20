import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Link = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M9.629 11.312a1.414 1.414 0 010 2l-5.665 5.665a3.875 3.875 0 005.479 5.48l5.666-5.666a1.414 1.414 0 112 2l-5.665 5.666a6.691 6.691 0 01-4.741 1.96 6.7 6.7 0 01-4.739-11.439l5.665-5.666a1.414 1.414 0 012 0zm8.837-1.356a1.414 1.414 0 010 2l-6.515 6.516a1.414 1.414 0 01-1.999-2.002l6.514-6.514a1.414 1.414 0 012 0zm7.988-7.993a6.702 6.702 0 01.001 9.478l-5.5 5.5a1.407 1.407 0 01-2.303-.457 1.415 1.415 0 01.305-1.54l5.5-5.5a3.875 3.875 0 00-5.481-5.48l-5.5 5.5a1.414 1.414 0 01-2-2l5.5-5.5a6.702 6.702 0 019.478-.001z"
          id={`link_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`link_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#link_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#link_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
