import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Sync = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M22.098 10.923c.781 0 1.414.633 1.414 1.414v5.738a5.442 5.442 0 01-5.436 5.435H4.827l2.355 2.354a1.413 1.413 0 11-2 2L.415 23.095a1.412 1.412 0 010-2l4.767-4.767a1.414 1.414 0 012 2L4.83 20.682l13.246.001a2.611 2.611 0 002.608-2.608v-5.738c0-.78.633-1.414 1.414-1.414zM18.331.414l4.767 4.766c.073.073.137.153.192.239l.015.025a1.014 1.014 0 01.085.161.656.656 0 01.02.044l.02.057a1.399 1.399 0 01.04.821 1.409 1.409 0 01-.188.428l-.025.037a1.178 1.178 0 01-.131.16l-.028.028-4.767 4.767a1.414 1.414 0 11-2-1.999l2.352-2.353H5.437a2.611 2.611 0 00-2.608 2.608v5.737a1.414 1.414 0 01-2.827 0v-5.737a5.442 5.442 0 015.435-5.436h13.246l-2.352-2.353a1.414 1.414 0 112-2z"
          id={`sync_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(4 2)" fill="none" fillRule="evenodd">
        <mask id={`sync_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#sync_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#sync_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-4-2h32v32H-4z" />
        </g>
      </g>
    </Svg>
  );
});
