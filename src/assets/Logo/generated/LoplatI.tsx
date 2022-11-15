import React from 'react';
import { LogoProps } from '../index';
import Svg from '../../svg';
import { marginSpacingProps } from '../../../core/Spacing';
export const LoplatI = React.memo<LogoProps>(({ width = 18, ...props }) => (
  <Svg
    {...marginSpacingProps(props)}
    width={width}
    height={(width * 41) / 35}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35 41"
    {...props}
  >
    <defs>
      <linearGradient x1="14.1%" y1="14.1%" x2="83.9%" y2="83.9%" id="loplat-i_svg__a">
        <stop stopColor="#4DC0E3" offset="0%" />
        <stop stopColor="#5159A3" offset="100%" />
      </linearGradient>
    </defs>
    <g fillRule="nonzero" fill="none">
      <path
        d="M29.522 5.066a17.294 17.294 0 00-24.458 0c-6.752 6.755-6.752 17.703 0 24.459l10.5 10.5v-12.23l-4.385-4.384a8.647 8.647 0 1112.23 0l-4.386 4.385v12.228l10.5-10.5c6.75-6.756 6.75-17.704-.001-24.458z"
        fill="#444"
      />
      <circle fill="url(#loplat-i_svg__a)" cx={17.29} cy={17.295} r={4.324} />
    </g>
  </Svg>
));
