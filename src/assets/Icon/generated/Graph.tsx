import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Graph = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M25.605.19c.437.252.707.719.707 1.224v25.449a1.414 1.414 0 11-2.828 0V1.414A1.414 1.414 0 0125.605.189zm-7.828 6.234c.437.197.707.56.707.953v19.8c0 .607-.633 1.1-1.414 1.1-.78 0-1.414-.493-1.414-1.1v-19.8c0-.393.27-.756.707-.953a1.77 1.77 0 011.414 0zm-7.828 7.947c.437.125.707.356.707.606v12.6c0 .387-.633.7-1.414.7-.78 0-1.414-.313-1.414-.7v-12.6c0-.25.27-.481.707-.606a2.712 2.712 0 011.414 0zm-7.828 5.96c.437.071.707.203.707.346v7.2c0 .22-.633.4-1.414.4-.78 0-1.414-.18-1.414-.4v-7.2c0-.143.27-.275.707-.346a4.69 4.69 0 011.414 0z"
          id={`graph_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2.757 2)" fill="none" fillRule="evenodd">
        <mask id={`graph_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#graph_svg__a__${uniqueId}`} />
        </mask>
        <use fill={fillColor} fillRule="nonzero" xlinkHref={`#graph_svg__a__${uniqueId}`} />
        <g mask={`url(#graph_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2.757-2h32v32h-32z" />
        </g>
      </g>
    </Svg>
  );
});
