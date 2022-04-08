import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const MicOn = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M19.62 13.132c.78 0 1.414.633 1.414 1.414-.004 5.327-3.964 9.729-9.102 10.424l-.001 1.896a1.415 1.415 0 01-2.828-.001V24.97C3.965 24.275.005 19.873 0 14.546a1.414 1.414 0 012.828 0 7.689 7.689 0 007.675 7.689H10.532l.23-.004a7.69 7.69 0 007.444-7.685c0-.78.633-1.414 1.414-1.414zM10.517 0a5.278 5.278 0 015.278 5.278v9.217a5.284 5.284 0 01-5.278 5.278 5.284 5.284 0 01-5.278-5.278V5.278A5.278 5.278 0 0110.517 0zm0 2.828a2.454 2.454 0 00-2.451 2.45v9.217a2.451 2.451 0 004.9 0V5.278a2.454 2.454 0 00-2.449-2.45z"
          id={`mic_on_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(5 2)" fill="none" fillRule="evenodd">
        <mask id={`mic_on_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#mic_on_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#mic_on_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-5-2h32v32H-5z" />
        </g>
      </g>
    </Svg>
  );
});
