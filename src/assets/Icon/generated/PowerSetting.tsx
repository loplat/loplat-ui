import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const PowerSetting = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M21.614 3.278a13.741 13.741 0 01-7.874 25v.001A13.74 13.74 0 015.353 3.656a1.414 1.414 0 111.728 2.239 10.911 10.911 0 1012.91-.3 1.414 1.414 0 011.623-2.317zM13.74 0c.781 0 1.414.633 1.414 1.414v11.193a1.414 1.414 0 11-2.828 0V1.414C12.326.634 12.96 0 13.74 0z"
          id={`power_setting_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`power_setting_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#power_setting_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#power_setting_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
