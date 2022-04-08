import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const VolumeOn = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.103 1.03a2.12 2.12 0 011.281 1.948v14.68a2.12 2.12 0 01-2.121 2.121l.001-.002a2.122 2.122 0 01-1.456-.579l-3.88-3.663a.7.7 0 00-.485-.192H3.535A3.539 3.539 0 010 11.808V8.823A3.539 3.539 0 013.535 5.29h2.907a.7.7 0 00.485-.192l3.88-3.662a2.121 2.121 0 012.296-.405zM23.796.327a12.406 12.406 0 010 19.1 1.414 1.414 0 01-1.806-2.177 9.579 9.579 0 000-14.749A1.413 1.413 0 0123.796.326zm-12.24 4.29L8.869 7.153a3.517 3.517 0 01-2.427.964H3.535a.708.708 0 00-.707.706v2.985c0 .39.317.707.707.707h2.907a3.522 3.522 0 012.427.964l2.687 2.537v-11.4zm7.894.173a6.208 6.208 0 010 10.168 1.414 1.414 0 11-1.631-2.312 3.379 3.379 0 000-5.545 1.414 1.414 0 011.631-2.31z"
          id={`volume_on_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 6)" fill="none" fillRule="evenodd">
        <mask id={`volume_on_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#volume_on_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#volume_on_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-6h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
