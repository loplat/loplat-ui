import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Cached = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M22.031 3.348l5.2 1.282a1.414 1.414 0 01-.677 2.746l-1.823-.448a11.528 11.528 0 01-10.572 16.13 11.427 11.427 0 01-4.816-1.052 1.414 1.414 0 111.183-2.568A8.7 8.7 0 0022.258 8.33l-.478 1.933a1.415 1.415 0 01-1.367 1.073 1.418 1.418 0 01-1.375-1.753l1.282-5.2a1.416 1.416 0 011.711-1.035zM14.163 0a11.416 11.416 0 015.123 1.2 1.414 1.414 0 01-1.258 2.533 8.711 8.711 0 00-12.565 7.8 8.6 8.6 0 00.615 3.228l.484-1.963a1.414 1.414 0 112.746.676l-1.282 5.2a1.414 1.414 0 01-1.373 1.075l-.003.004c-.114 0-.227-.013-.338-.04l-5.2-1.283a1.414 1.414 0 11.676-2.745l1.805.446A11.529 11.529 0 0114.163 0z"
          id={`cached_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`cached_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#cached_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#cached_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
