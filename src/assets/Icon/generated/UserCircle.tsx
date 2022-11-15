import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const UserCircle = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.139 0c7.809 0 14.139 6.33 14.139 14.139-.009 7.805-6.334 14.13-14.139 14.139C6.33 28.278 0 21.948 0 14.139 0 6.33 6.33 0 14.139 0zm1.036 18.364h-2.073a5.222 5.222 0 00-5.216 5.201 11.25 11.25 0 006.253 1.885c2.312 0 4.462-.694 6.253-1.884v.014a5.223 5.223 0 00-5.217-5.216zM14.139 2.828c-6.247 0-11.311 5.064-11.311 11.311 0 2.72.96 5.215 2.56 7.166a8.074 8.074 0 014.32-5.016 5.766 5.766 0 118.858 0 8.07 8.07 0 014.325 5.016c1.599-1.95 2.559-4.446 2.559-7.166-.008-6.244-5.067-11.303-11.311-11.311zm0 6.833v.003a2.938 2.938 0 00-.126 5.873h.265a2.938 2.938 0 002.798-2.935 2.941 2.941 0 00-2.937-2.941z"
          id={`user_circle_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`user_circle_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#user_circle_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#user_circle_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
