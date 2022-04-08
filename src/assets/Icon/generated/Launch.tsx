import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Launch = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M11.222 0a1.414 1.414 0 010 2.828H3.535a.708.708 0 00-.707.707v21.208c0 .39.317.706.707.707h21.207c.39 0 .706-.317.707-.707v-6.31a1.414 1.414 0 012.828 0v6.31a3.539 3.539 0 01-3.535 3.534H3.535A3.539 3.539 0 010 24.743V3.535A3.539 3.539 0 013.535 0h7.687zm15.641 0c.282 0 .544.082.765.224l.049.034.06.044.044.037c.025.02.048.042.07.064l.012.012.012.011.062.068-.074-.079a1.429 1.429 0 01.382.698c.023.106.034.214.032.321v10.187a1.414 1.414 0 01-2.828 0V4.827L15.138 15.139a1.414 1.414 0 01-1.999-2l10.31-10.311h-5.864a1.414 1.414 0 010-2.828h9.278z"
          id={`launch_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`launch_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#launch_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#launch_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
