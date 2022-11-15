import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const VisibilityOff = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M19.723 6.558L25.868.414a1.414 1.414 0 012 2l-4.92 4.922a17.127 17.127 0 015.177 6.16c.183.358.202.773.064 1.141l-.016.038a.94.94 0 01-.048.106c-2.87 5.624-8.228 9.117-13.983 9.117-2.191.001-4.35-.494-6.315-1.441l-5.409 5.407a1.414 1.414 0 11-2.001-2L19.723 6.558zm1.197 2.803l-2.411 2.412a4.963 4.963 0 01-4.364 7.33h-.003a4.933 4.933 0 01-2.364-.598l-1.8 1.801c1.324.503 2.735.764 4.162.764 4.471 0 8.676-2.639 11.124-6.94a14.285 14.285 0 00-4.344-4.769zm-6.778-4.98c1.101 0 2.198.127 3.27.378a1.414 1.414 0 11-.644 2.753c-.86-.2-1.742-.3-2.626-.3-4.47 0-8.671 2.637-11.12 6.933a15.027 15.027 0 002.46 3.221 1.414 1.414 0 01-.854 2.411l-.14.007-.137-.006a1.416 1.416 0 01-.86-.403 17.92 17.92 0 01-3.337-4.594 1.413 1.413 0 01.044-1.364l-.04.08C3.028 7.872 8.386 4.38 14.142 4.38zm2.151 9.61l-2.298 2.297a2.134 2.134 0 002.298-2.298z"
          id={`visibility_off_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`visibility_off_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#visibility_off_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#visibility_off_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
