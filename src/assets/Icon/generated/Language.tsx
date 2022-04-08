import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Language = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M22.492 2.73a14.139 14.139 0 01-7.967 25.543 1.185 1.185 0 01-.299.005h-.088v.005l-.14-.001-.05.001-.01.001-.093-.005h-.047A14.139 14.139 0 013.184 5.205a1.414 1.414 0 012.19 1.789 11.255 11.255 0 00-2.455 5.738h4.757c.25-3.341 1.31-6.56 3.074-9.382-1.12.351-2.204.885-3.208 1.605a1.416 1.416 0 01-1.65-2.3 14.139 14.139 0 0116.6.076zM17.78 15.56h-7.262c.335 3.523 1.837 7.472 3.632 9.533 1.793-2.062 3.295-6.011 3.63-9.533zm-10.101 0H2.923a11.264 11.264 0 003.507 6.843 11.262 11.262 0 004.125 2.453c-1.518-2.61-2.618-6.071-2.877-9.296zm17.665 0h-4.725c-.258 3.22-1.356 6.674-2.87 9.283a11.265 11.265 0 004.126-2.476 11.263 11.263 0 003.469-6.806zM14.148 3.415l-.012.015a17.874 17.874 0 00-3.62 9.302h7.264c-.3-3.387-1.56-6.62-3.632-9.317zm3.407-.05l.009.016a20.587 20.587 0 013.056 9.351h4.726a11.255 11.255 0 00-2.489-5.778 11.256 11.256 0 00-5.302-3.589z"
          id={`language_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`language_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#language_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#language_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
