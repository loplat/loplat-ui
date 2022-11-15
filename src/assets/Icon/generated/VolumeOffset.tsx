import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const VolumeOffset = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M4.346 17.359c.78 0 1.414.633 1.414 1.414v7.384a1.415 1.415 0 01-2.828 0v-7.384c0-.78.633-1.414 1.414-1.414zm18.793 1.884c.78 0 1.414.633 1.414 1.414v5.5c0 .735-.56 1.338-1.277 1.407l-.136.007c-.781 0-1.414-.633-1.414-1.414v-5.5c0-.78.633-1.413 1.413-1.413zm-7.02-13.1a1.743 1.743 0 010 3.485h-.964v16.533a1.414 1.414 0 01-1.276 1.403l-.137.007-.135-.007a1.415 1.415 0 01-1.278-1.407l-.001-16.529h-.962a1.743 1.743 0 110-3.485h4.753zM23.139 0c.78 0 1.414.633 1.414 1.414l-.001 13.115.964.001a1.743 1.743 0 010 3.485h-4.753a1.742 1.742 0 110-3.485l.962-.001V1.414c0-.78.634-1.413 1.414-1.413zM4.346 0c.78 0 1.414.633 1.414 1.414l-.001 11.198h.779a1.743 1.743 0 010 3.485H1.785a1.743 1.743 0 110-3.485H2.93V1.414C2.932.634 3.566 0 4.347 0zm9.396.034c.767 0 1.393.61 1.414 1.376v2.473c0 .735-.56 1.338-1.277 1.407l-.136.007c-.781 0-1.414-.633-1.414-1.414V1.41A1.414 1.414 0 0113.742.034z"
          id={`volume_offset_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`volume_offset_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#volume_offset_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#volume_offset_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
