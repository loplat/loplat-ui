import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Print = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M22.403 0c.78 0 1.414.633 1.414 1.414v4.581l.225.001a4.246 4.246 0 014.241 4.242v7.79a4.246 4.246 0 01-4.241 4.238c-.077 0-.152-.006-.225-.018v3.993a1.414 1.414 0 01-1.414 1.418H5.885c-.78 0-1.414-.633-1.414-1.414l.001-3.994a1.424 1.424 0 01-.23.019A4.247 4.247 0 010 18.028v-7.79a4.247 4.247 0 014.242-4.242l.229-.001V1.414C4.471.634 5.104 0 5.885 0h16.518zM5.806 8.824H4.242c-.78 0-1.413.633-1.414 1.414v7.79c.001.78.634 1.413 1.414 1.414.078 0 .155.006.23.019l-.001-6.316a1.414 1.414 0 012.828 0v11.683h13.69V14.555H10.023a1.414 1.414 0 010-2.828h12.38c.78 0 1.414.633 1.414 1.414v6.315c.073-.012.148-.018.225-.018a1.416 1.416 0 001.414-1.414v-7.786a1.416 1.416 0 00-1.414-1.414l-1.56.002a1.415 1.415 0 01-.079.002l-.078-.004-16.362.002a1.437 1.437 0 01-.078.002l-.079-.004zM17.81 20.241a1.061 1.061 0 110 2.121h-6.967a1.061 1.061 0 010-2.121h6.967zm0-3.371a1.061 1.061 0 110 2.121h-6.967a1.061 1.061 0 010-2.121h6.967zm3.179-14.046H7.299l-.001 3.171h13.691V2.824z"
          id={`print_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`print_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#print_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#print_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
