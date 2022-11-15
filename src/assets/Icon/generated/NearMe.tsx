import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const NearMe = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M27.54.874c.778.835.957 2.064.45 3.086L16.743 26.567a2.708 2.708 0 01-2.99 1.466 2.711 2.711 0 01-2.2-2.506l-.551-8.339a4.242 4.242 0 011.224-3.269l3.273-3.3a1.414 1.414 0 112.006 1.993l-3.273 3.3a1.417 1.417 0 00-.408 1.089l.53 8.017L25.357 2.904 3.029 12.071l6.014 1.481a1.414 1.414 0 01-.336 2.787v.004c-.115 0-.229-.014-.34-.041l-6.274-1.545a2.74 2.74 0 01-.386-5.2L24.497.201l.142-.05-.144.054a2.741 2.741 0 013.046.669z"
          id={`near_me_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`near_me_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#near_me_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#near_me_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
