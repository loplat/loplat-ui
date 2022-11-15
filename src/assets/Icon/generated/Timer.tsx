import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Timer = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M16.527 0a1.413 1.413 0 110 2.827l-3.133-.001v1.577A11.979 11.979 0 0123.959 16.3c-.007 6.612-5.366 11.97-11.978 11.978a11.979 11.979 0 01-1.414-23.874V2.826l-3.13.001a1.413 1.413 0 110-2.827h9.091zm-4.533 7.149h-.014l-.015-.001-.25.005A9.15 9.15 0 1021.13 16.3a9.161 9.161 0 00-9.136-9.151zm-.013 1.778c.781 0 1.414.633 1.414 1.414v5.324l2.8 2.525a1.414 1.414 0 01-.946 2.465l.005.005c-.35 0-.686-.13-.946-.364l-3.273-2.946a1.409 1.409 0 01-.468-1.05v-5.959c0-.78.633-1.414 1.414-1.414z"
          id={`timer_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(4 2.001)" fill="none" fillRule="evenodd">
        <mask id={`timer_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#timer_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#timer_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-4-2.001h32v32H-4z" />
        </g>
      </g>
    </Svg>
  );
});
