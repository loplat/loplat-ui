import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Target = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.176 0c7.808 0 14.139 6.33 14.14 14.139-.01 7.805-6.334 14.13-14.14 14.14C6.48 28.279.217 22.127.041 14.472a1.392 1.392 0 01-.002-.665C.218 6.153 6.48.001 14.176.001V0zm1.414 2.917v5.385a1.414 1.414 0 01-2.828 0V2.916a11.313 11.313 0 00-9.81 9.81H8.34a1.414 1.414 0 110 2.827H2.953a11.304 11.304 0 003.225 6.586 11.304 11.304 0 006.584 3.224v-5.386a1.414 1.414 0 112.828 0v5.387a11.313 11.313 0 009.81-9.811h-5.386a1.414 1.414 0 110-2.827l5.385-.001a11.33 11.33 0 00-9.809-9.808z"
          id={`target_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`target_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#target_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#target_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
