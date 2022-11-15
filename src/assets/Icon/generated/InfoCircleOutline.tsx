import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const InfoCircleOutline = React.memo<IconProps>(
  ({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
            d="M19.552 1.077a14.14 14.14 0 018.728 13.064c-.008 7.806-6.334 14.131-14.14 14.14a14.14 14.14 0 115.412-27.204zM14.14 2.829c-6.247 0-11.312 5.065-11.312 11.312 0 6.248 5.065 11.312 11.312 11.312 6.248 0 11.312-5.064 11.312-11.312C25.445 7.897 20.385 2.837 14.14 2.83zm0 8.727c.781 0 1.414.633 1.414 1.414v7.172a1.415 1.415 0 01-2.828 0V12.97c0-.78.633-1.414 1.414-1.414zm0-4.94a1.488 1.488 0 110 2.975 1.488 1.488 0 010-2.976z"
            id={`info_circle_outline_svg__a__${uniqueId}`}
          />
        </defs>
        <g transform="translate(2 2)" fill="none" fillRule="evenodd">
          <mask id={`info_circle_outline_svg__b__${uniqueId}`} fill="#fff">
            <use xlinkHref={`#info_circle_outline_svg__a__${uniqueId}`} />
          </mask>
          <g mask={`url(#info_circle_outline_svg__b__${uniqueId})`}>
            <path fill={fillColor} d="M-2-2h32v32H-2z" />
          </g>
        </g>
      </Svg>
    );
  },
);
