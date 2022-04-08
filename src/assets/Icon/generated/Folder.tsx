import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Folder = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M24 19.916c0 .074-.06.134-.134.134H2.134A.134.134 0 012 19.916V6.434l.174-.327h11.38a.996.996 0 00.322-.057h9.99c.074 0 .134.059.134.134v13.732zM2.089 2h6.944l2.049 2.05H2.134c-.046 0-.089.01-.134.013V2.089A.09.09 0 012.089 2zm21.777 2.05H13.91L10.154.293A1 1 0 009.447 0H2.089A2.092 2.092 0 000 2.089V19.916c0 1.177.957 2.134 2.134 2.134h21.732A2.136 2.136 0 0026 19.916V6.184a2.136 2.136 0 00-2.134-2.134z"
          id={`folder_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(3 5)" fill="none" fillRule="evenodd">
        <mask id={`folder_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#folder_svg__a__${uniqueId}`} />
        </mask>
        <use fill="#000" xlinkHref={`#folder_svg__a__${uniqueId}`} />
        <g mask={`url(#folder_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-3-5h32v32H-3z" />
        </g>
      </g>
    </Svg>
  );
});
