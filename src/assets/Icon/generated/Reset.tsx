import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Reset = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M19.537 1.265l.545 5.145a1.413 1.413 0 01-1.257 1.555l-5.146.546a1.28 1.28 0 01-.148.013 1.413 1.413 0 01-.147-2.82l1.778-.19a8.354 8.354 0 10-5.114 15.62 8.356 8.356 0 009.127-10.7 1.414 1.414 0 012.7-.824 11.187 11.187 0 01-10.693 14.434l.006-.004A11.181 11.181 0 1116.905 3.25l-.18-1.686a1.414 1.414 0 012.812-.3z"
          id={`reset_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(5 4)" fill="none" fillRule="evenodd">
        <mask id={`reset_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#reset_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#reset_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-5-4h32v32H-5z" />
        </g>
      </g>
    </Svg>
  );
});
