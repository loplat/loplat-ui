import React from 'react';
import { LogoProps } from '../index';
import Svg from '../../svg';
import { marginSpacingProps } from '../../../core/Spacing';
export const LoplatX = React.memo<LogoProps>(({ width = 18, ...props }) => (
  <Svg
    {...marginSpacingProps(props)}
    width={width}
    height={width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M24.526 4H32L8.499 29H1L24.526 4z" fill="#0047AE" />
    <path d="M6.341 4h7.794l12.58 25H18.92L6.341 4z" fill="#0580FF" />
    <path d="M1 29h7.499l6.789-7.205-2.604-5.189L1 29z" fill="url(#loplat-x_svg__paint0_linear_11619_58741)" />
    <defs>
      <linearGradient
        id="loplat-x_svg__paint0_linear_11619_58741"
        x1={16.009}
        y1={21.419}
        x2={13.346}
        y2={25.473}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#281913" stopOpacity={0.5} />
        <stop offset={1} stopColor="#0067A2" stopOpacity={0} />
      </linearGradient>
    </defs>
  </Svg>
));
