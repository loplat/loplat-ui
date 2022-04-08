import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Bookmark = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M19.208 28.107l-8.558-4.673-8.559 4.673c-.207.113-.44.172-.676.173A1.415 1.415 0 010 26.863V4.242A4.247 4.247 0 014.242 0h13.523a3.539 3.539 0 013.534 3.535v23.327a1.416 1.416 0 01-2.091 1.245zm-.736-3.625V3.538a.708.708 0 00-.707-.708H4.242c-.781 0-1.414.634-1.415 1.415v20.238l7.091-3.869c.119-.071.248-.125.382-.159h.009l.03-.007H10.845l.035.005h.013l.03.006h.018l.023.005.026.006h.014l.034.009c.119.034.232.083.338.146l7.096 3.857z"
          id={`bookmark_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(5 2)" fill="none" fillRule="evenodd">
        <mask id={`bookmark_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#bookmark_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#bookmark_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-5-2h32v32H-5z" />
        </g>
      </g>
    </Svg>
  );
});
