import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Map = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M10.17.03l8.216 1.607L26.592.033a1.413 1.413 0 011.685 1.388V21.2c0 .676-.479 1.258-1.143 1.388l-8.464 1.655c-.094.02-.19.03-.288.03h-.002c-.096 0-.191-.01-.284-.029L9.897 22.64l-8.212 1.607A1.413 1.413 0 010 22.859V3.079c0-.675.478-1.257 1.142-1.387L9.446.067c.23-.073.48-.088.724-.036zM8.483 3.139L2.828 4.244v16.9l5.655-1.106v-16.9zm16.966 0l-5.653 1.105v16.9l5.653-1.105v-16.9zm-14.138-.004v16.901l5.655 1.106v-16.9l-5.655-1.107z"
          id={`map_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`map_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#map_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#map_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
