import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const ArrowLeft = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.786.414a1.414 1.414 0 010 2l-9.958 9.958 21.328-.022a1.414 1.414 0 110 2.828L4.83 15.2l9.957 9.957a1.414 1.414 0 01-1 2.414v.001a1.41 1.41 0 01-1-.414L.472 14.844A1.41 1.41 0 010 13.789l.007-.136-.007.133c0-.166.03-.33.086-.484l.015-.038a1.34 1.34 0 01.105-.213 1.34 1.34 0 01.209-.265L12.786.414a1.414 1.414 0 012 0z"
          id={`arrow_left_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2.001 2)" fill="none" fillRule="evenodd">
        <mask id={`arrow_left_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#arrow_left_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#arrow_left_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2.001-2h32v32h-32z" />
        </g>
      </g>
    </Svg>
  );
});
