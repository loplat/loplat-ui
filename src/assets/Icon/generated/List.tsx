import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const List = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M2.552 19.157a2.552 2.552 0 110 5.104 2.552 2.552 0 010-5.104zm24.212 1.138a1.414 1.414 0 010 2.828H8.59a1.414 1.414 0 010-2.828h18.174zM2.552 9.579a2.552 2.552 0 110 5.104 2.552 2.552 0 010-5.104zm24.212 1.136a1.414 1.414 0 110 2.827H8.59a1.414 1.414 0 110-2.827h18.174zM2.552 0a2.552 2.552 0 110 5.104 2.552 2.552 0 010-5.104zm24.212 1.138a1.414 1.414 0 010 2.828H8.59a1.414 1.414 0 010-2.828h18.174z"
          id={`list_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`list_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#list_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#list_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
