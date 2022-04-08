import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const FolderFill = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M9.447 0a1 1 0 01.707.293L13.91 4.05h9.956c1.177 0 2.134.957 2.134 2.134v13.732a2.136 2.136 0 01-2.134 2.134H2.134A2.136 2.136 0 010 19.916V2.089C0 .937.938 0 2.089 0zm2.588 16.768c.085 0 .17-.007.252-.022l.012-.003a1.217 1.217 0 00.26-.076 1.062 1.062 0 00.185-.09 2.14 2.14 0 00.157-.105l.03-.024.03-.025.051-.047.023-.022 5.846-5.845a1.414 1.414 0 00-2-2l-4.892 4.89-2.232-2.035a1.414 1.414 0 00-1.236-.34l-.146.038a1.414 1.414 0 00-.523 2.393l3.23 2.944.052.045c.005.002.009.006.013.009.029.025.06.049.092.07l.024.015c.11.073.228.128.353.167l.028.008c.126.036.257.055.39.055z"
          id={`folder-fill_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(3 5)" fill="none" fillRule="evenodd">
        <mask id={`folder-fill_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#folder-fill_svg__a__${uniqueId}`} />
        </mask>
        <use fill="#000" xlinkHref={`#folder-fill_svg__a__${uniqueId}`} />
        <g mask={`url(#folder-fill_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-3-5h32v32H-3z" />
        </g>
      </g>
    </Svg>
  );
});
