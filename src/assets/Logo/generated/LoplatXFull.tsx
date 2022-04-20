import React from 'react';
import { LogoProps } from '../index';
import Svg from '../../svg';
import { marginSpacingProps } from '../../../core/Spacing';
export const LoplatXFull = React.memo<LogoProps>(({ width = 18, ...props }) => (
  <Svg
    {...marginSpacingProps(props)}
    width={width}
    height={(width * 122) / 520}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 520 122"
    {...props}
  >
    <defs>
      <path id="loplat-x-full_svg__a" d="M0 47.3h28.5l25.8-27.5L44.4 0z" />
      <path id="loplat-x-full_svg__c" d="M0 0h35.2v95.4H0z" />
      <path id="loplat-x-full_svg__e" d="M0 122.2h519.8V0H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="#0060A4" d="M491.4 0L402 95.4h28.5L519.8 0z" />
      <path fill="#00B8EA" d="M422.3 0l47.8 95.4h30.5L452.8 0z" />
      <g transform="translate(402 48.1)">
        <mask id="loplat-x-full_svg__b" fill="#fff">
          <use xlinkHref="#loplat-x-full_svg__a" />
        </mask>
        <path mask="url(#loplat-x-full_svg__b)" d="M0 47.3h28.5l25.8-27.5L44.4 0z" />
      </g>
      <g>
        <mask id="loplat-x-full_svg__d" fill="#fff">
          <use xlinkHref="#loplat-x-full_svg__c" />
        </mask>
        <path
          d="M35.2 74.6v20.8H18.8c-5.2 0-9.7-1.9-13.3-5.5C1.8 86.2 0 81.7 0 76.6V0h20.9v74.6h14.3z"
          fill="#00B8EA"
          mask="url(#loplat-x-full_svg__d)"
        />
        <mask id="loplat-x-full_svg__f" fill="#fff">
          <use xlinkHref="#loplat-x-full_svg__e" />
        </mask>
        <path
          d="M64.5 74.6h32.7V43H64.5v31.6zm52.1-40.8c-.9-2.2-2.3-4.3-4.1-6.1-3.7-3.7-8.2-5.5-13.3-5.5H62.7c-5.2 0-9.6 1.9-13.3 5.5-3.7 3.7-5.5 8.2-5.5 13.3v35.5c0 5.2 1.9 9.7 5.5 13.3 3.6 3.6 8.1 5.5 13.3 5.5h36.5c5.2 0 9.7-1.9 13.3-5.5 3.7-3.7 5.5-8.2 5.5-13.3V41c0-2.6-.5-5-1.4-7.2zM248.5 74.6v20.8h-16.4c-5.2 0-9.7-1.9-13.3-5.5-3.7-3.7-5.5-8.2-5.5-13.3V.1h20.9v74.6l14.3-.1zM360.2 42.9v31.6h26.4v20.8h-28.3c-5.3 0-9.8-1.9-13.4-5.5-3.6-3.7-5.5-8.1-5.5-13.3V0h20.8v22.2h26.4V43l-26.4-.1zM182.1 43v31.6h-32.7V43h32.7m15.2-15.3c-3.7-3.7-8.2-5.5-13.3-5.5h-36.5c-5.2 0-9.7 1.9-13.3 5.5-3.7 3.7-5.5 8.2-5.5 13.3v81.2h20.8V95.3h34.6c5.2 0 9.7-1.9 13.3-5.5 3.7-3.7 5.5-8.2 5.5-13.3V41c0-5.1-1.9-9.6-5.6-13.3M275.1 76.3h34.3v-7h-34.3v7zm48.2-47.1c-3.5-3.5-7.8-5.3-12.7-5.3H256v19.2h53.4v7H274c-4.9 0-9.2 1.8-12.8 5.3-3.5 3.5-5.3 7.8-5.3 12.8v9.3c0 4.9 1.8 9.2 5.3 12.7s7.8 5.3 12.8 5.3h38.1c4.3-.3 8-2.1 11.2-5.2 3.5-3.5 5.3-7.8 5.3-12.8V42c0-5-1.8-9.3-5.3-12.8z"
          fill="#00B8EA"
          mask="url(#loplat-x-full_svg__f)"
        />
      </g>
    </g>
  </Svg>
));
