import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const StreetView = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M4.096 16.782a1.414 1.414 0 01.211 2.457 3.057 3.057 0 00-1.48 2.138c0 1.921 3.8 4.07 8.885 4.07s8.884-2.149 8.884-4.07a2.888 2.888 0 00-1.386-2.082 5.536 5.536 0 014.214 2.085c0 3.867-5.145 6.897-11.712 6.897-6.568 0-11.712-3.03-11.712-6.9a5.573 5.573 0 012.675-4.447c.412-.303.956-.36 1.421-.148zM11.712 0a6.521 6.521 0 016.521 6.521 6.531 6.531 0 01-5.107 6.366v8.239a1.414 1.414 0 01-2.828 0v-8.238A6.521 6.521 0 0111.712 0zm-.001 2.826a3.696 3.696 0 00-2.612 6.307 3.694 3.694 0 102.809-6.3l-.197-.007z"
          id={`street_view_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(4 2)" fill="none" fillRule="evenodd">
        <mask id={`street_view_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#street_view_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#street_view_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-4-2h32v32H-4z" />
        </g>
      </g>
    </Svg>
  );
});
