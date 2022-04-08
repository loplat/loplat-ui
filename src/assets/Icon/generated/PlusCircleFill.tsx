import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const PlusCircleFill = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M19.552 1.077a14.14 14.14 0 018.728 13.064c-.008 7.806-6.334 14.131-14.14 14.14a14.14 14.14 0 115.412-27.204zM14.14 6.015c-.78 0-1.414.633-1.414 1.414v5.3H7.433a1.414 1.414 0 000 2.827h5.293v5.286a1.414 1.414 0 002.828 0v-5.286h5.291a1.414 1.414 0 000-2.828h-5.29V7.43c0-.78-.634-1.414-1.415-1.414z"
          id={`plus_circle_fill_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`plus_circle_fill_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#plus_circle_fill_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#plus_circle_fill_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
