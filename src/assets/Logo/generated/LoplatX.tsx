import React from 'react';
import { LogoProps } from '../index';
import Svg from '../../svg';
import { marginSpacingProps } from '../../../core/Spacing';
export const LoplatX = React.memo<LogoProps>(({ width = 18, ...props }) => (
  <Svg
    {...marginSpacingProps(props)}
    width={width}
    height={(width * 28) / 35}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 35 28"
    {...props}
  >
    <defs>
      <path id="loplat-x_svg__a" d="M0 14h8.398L16 5.86 13.083 0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="#0060A4" d="M26.803 0L1 27h8.226L35 0z" />
      <path fill="#00B9EB" d="M6 0l14.04 27H29L14.96 0z" />
      <g transform="translate(0 14)">
        <mask id="loplat-x_svg__b" fill="#fff">
          <use xlinkHref="#loplat-x_svg__a" />
        </mask>
        <path mask="url(#loplat-x_svg__b)" d="M0 14h8.398L16 5.86 13.083 0z" />
      </g>
    </g>
  </Svg>
));
