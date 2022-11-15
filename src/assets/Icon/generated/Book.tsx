import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Book = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.997 23.498l-.126-.018-.008-.001-.05-.012a1.384 1.384 0 01-.34-.128l-.03-.017a1.37 1.37 0 01-.297-.224c-.742-.733-2.691-1.472-5.369-1.472a10.225 10.225 0 00-4.655.968A2.117 2.117 0 010 20.728V4.435A2.827 2.827 0 01.859 2.4 10.15 10.15 0 017.777.01a12.129 12.129 0 013.64.54 1.415 1.415 0 01-.849 2.7 9.426 9.426 0 00-2.791-.41 7.431 7.431 0 00-4.96 1.6l.01 15.189a14.079 14.079 0 014.95-.83c2.497 0 4.808.567 6.361 1.521 1.552-.955 3.864-1.522 6.364-1.522a14.086 14.086 0 014.949.829V4.435a7.394 7.394 0 00-4.949-1.6c-2.305 0-4.066.756-4.949 1.592v12.79c0 .735-.561 1.339-1.278 1.407l-.136.007c-.78 0-1.413-.633-1.414-1.413V3.888c0-.051.003-.102.008-.153l-.008.154a1.425 1.425 0 01.24-.788l.056-.08c1.437-1.86 4.3-3.014 7.481-3.014 2.523-.091 4.99.76 6.918 2.39.55.533.86 1.268.858 2.035v16.293a2.116 2.116 0 01-3.121 1.866 10.233 10.233 0 00-4.655-.968c-2.641 0-4.572.718-5.337 1.44-.26.28-.63.445-1.026.445v-.002l-.142-.008z"
          id={`book_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`book_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#book_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#book_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
