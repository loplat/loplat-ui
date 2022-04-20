import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const CancelCircleFill = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M25.888 6.288a14.132 14.132 0 01-1.523 17.594l-.243.248a14.092 14.092 0 01-10 4.135A14.132 14.132 0 1125.888 6.288zM10.38 8.39a1.414 1.414 0 00-2 2l3.743 3.743-3.743 3.742a1.414 1.414 0 002 2l3.743-3.742 3.741 3.741a1.417 1.417 0 002.001-2l-3.742-3.742 3.741-3.74a1.414 1.414 0 00-2-2l-3.741 3.74z"
          id={`cancel_circle_fill_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`cancel_circle_fill_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#cancel_circle_fill_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#cancel_circle_fill_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
