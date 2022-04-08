import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Laptop = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M24.788 0c.781 0 1.414.633 1.414 1.414v13.891l1.983 5.159a1.414 1.414 0 01-1.319 1.922l-.002-.001H1.414a1.414 1.414 0 01-1.32-1.922l1.98-5.149v-13.9C2.074.634 2.707 0 3.488 0h21.3zm-.97 16.989H4.46l-.988 2.568h21.332l-.988-2.568zm-.444-14.161H4.904v11.328h18.47V2.828z"
          id={`laptop_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 5.002)" fill="none" fillRule="evenodd">
        <mask id={`laptop_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#laptop_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#laptop_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-5.002h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
