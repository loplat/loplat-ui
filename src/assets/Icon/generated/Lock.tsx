import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Lock = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M12.322 0a6.841 6.841 0 016.841 6.841l-.001.376.532.001a4.954 4.954 0 014.949 4.949v11.162a4.955 4.955 0 01-4.949 4.949H4.949A4.955 4.955 0 010 23.329V12.167a4.955 4.955 0 014.949-4.949l.531-.001.001-.376A6.841 6.841 0 0112.322 0zm7.372 10.046H7.217c-.212.05-.433.05-.645 0H4.95c-1.17.002-2.12.95-2.121 2.121v11.162c.001 1.17.95 2.12 2.121 2.121h14.745a2.123 2.123 0 002.121-2.121V12.167a2.123 2.123 0 00-2.121-2.121zm-7.372 4.072c.78 0 1.414.633 1.414 1.414v4.091a1.414 1.414 0 01-2.828 0v-4.091c0-.78.633-1.414 1.414-1.414zm0-11.29A4.014 4.014 0 008.308 6.84l-.001.376h8.027l.001-.376a4.014 4.014 0 00-4.014-4.014z"
          id={`lock_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(4 2)" fill="none" fillRule="evenodd">
        <mask id={`lock_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#lock_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#lock_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-4-2h32v32H-4z" />
        </g>
      </g>
    </Svg>
  );
});
