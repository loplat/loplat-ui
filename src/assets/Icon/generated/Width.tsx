import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Width = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M8.152.414a1.414 1.414 0 010 2L4.84 5.725l8.981.006 9.618-.006-3.311-3.31a1.414 1.414 0 112-2l5.618 5.616a1.412 1.412 0 01.535 1.123c0 .234-.057.455-.158.65l-.013.023a1.387 1.387 0 01-.237.32l-.006.005-5.74 5.738a1.413 1.413 0 11-2-1.999l3.325-3.325-9.631-.007-8.995.006 3.326 3.326a1.413 1.413 0 11-2 2L.414 8.151l-.035-.038a1.422 1.422 0 01-.016-.017l.05.055a1.414 1.414 0 01-.387-1.27l.002-.013c.064-.33.24-.618.49-.823L6.151.414a1.414 1.414 0 012 0z"
          id={`width_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 9)" fill="none" fillRule="evenodd">
        <mask id={`width_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#width_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#width_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-9h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
