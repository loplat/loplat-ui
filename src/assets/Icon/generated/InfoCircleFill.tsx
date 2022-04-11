import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const InfoCircleFill = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M19.552 1.077a14.14 14.14 0 018.728 13.064c-.008 7.806-6.334 14.131-14.14 14.14a14.14 14.14 0 115.412-27.204zm-5.412 10.48c-.78 0-1.414.632-1.414 1.413v7.172a1.415 1.415 0 002.828 0V12.97c0-.78-.633-1.414-1.414-1.414zm0-4.942a1.488 1.488 0 100 2.976 1.488 1.488 0 000-2.976z"
          id={`info_circle_fill_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`info_circle_fill_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#info_circle_fill_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#info_circle_fill_svg__b__${uniqueId})`} fillRule="nonzero">
          <path d="M19.552 1.077a14.14 14.14 0 018.728 13.064c-.008 7.806-6.334 14.131-14.14 14.14a14.14 14.14 0 115.412-27.204zm-5.412 10.48c-.78 0-1.414.632-1.414 1.413v7.172a1.415 1.415 0 002.828 0V12.97c0-.78-.633-1.414-1.414-1.414zm0-4.942a1.488 1.488 0 100 2.976 1.488 1.488 0 000-2.976z" />
        </g>
        <g mask={`url(#info_circle_fill_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
