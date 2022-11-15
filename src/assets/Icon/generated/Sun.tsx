import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Sun = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.139 22.608c.78 0 1.414.633 1.414 1.414v2.843a1.414 1.414 0 01-2.828 0v-2.843c0-.78.633-1.414 1.414-1.414zm-5.989-2.48a1.414 1.414 0 010 2l-2.011 2.009a1.414 1.414 0 11-2-2l2.011-2.009a1.414 1.414 0 012 0zm13.978-.002l2.011 2.01a1.414 1.414 0 01-1 2.414v.001c-.375 0-.735-.148-1-.414l-2.011-2.011a1.414 1.414 0 012-2zm-7.989-12.85a6.863 6.863 0 016.863 6.863 6.871 6.871 0 01-6.627 6.859l-.237.003-.235-.003a6.863 6.863 0 01.236-13.722zm0 2.826a4.035 4.035 0 104.035 4.035 4.039 4.039 0 00-4.035-4.033v-.002zm-9.882 2.623a1.414 1.414 0 010 2.828H1.414a1.414 1.414 0 010-2.828h2.843zm22.608 0a1.414 1.414 0 010 2.828h-2.843a1.414 1.414 0 010-2.828h2.843zm-2.726-8.583a1.414 1.414 0 010 2l-2.011 2.01a1.414 1.414 0 11-2.001-2.001l2.012-2.009a1.414 1.414 0 012 0zm-18-.002L8.15 6.15a1.414 1.414 0 01-1 2.414l.001.001c-.375 0-.735-.148-1-.414L4.139 6.14a1.414 1.414 0 112-2zm8-4.14c.78 0 1.414.633 1.414 1.414v2.843a1.414 1.414 0 01-2.828 0V1.414c0-.78.633-1.414 1.414-1.414z"
          id={`sun_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`sun_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#sun_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#sun_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
