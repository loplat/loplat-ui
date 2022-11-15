import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Lightning = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.14 28.279c-.782 0-1.415-.633-1.415-1.414v-8.98H1.415a1.414 1.414 0 01-1.08-2.326L13.06.502a1.413 1.413 0 012.493.913v8.979h11.312a1.413 1.413 0 011.08 2.326L15.218 27.778a1.414 1.414 0 01-1.08.5zM4.46 15.058h9.68c.78 0 1.412.632 1.413 1.412V23l8.266-9.78h-9.68c-.78 0-1.413-.633-1.414-1.414v-6.53L4.46 15.058z"
          id={`lightning_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`lightning_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#lightning_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#lightning_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
