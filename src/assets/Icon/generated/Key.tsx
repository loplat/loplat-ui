import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Key = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M22.45 0c.375 0 .735.149 1 .414l4.414 4.414a1.414 1.414 0 010 2l-4.328 4.328a1.412 1.412 0 01-2 0l-1.188-1.188a1.414 1.414 0 012-2l.188.188 2.329-2.328-2.414-2.415-8.596 8.598a7.789 7.789 0 01-6.073 12.65h-.003a7.687 7.687 0 01-4.3-1.3 7.786 7.786 0 01-1.2-11.99 7.737 7.737 0 015.31-2.277h.036a1.414 1.414 0 01.033 2.827 4.952 4.952 0 103.624 1.45 1.425 1.425 0 01-.142-.167 1.414 1.414 0 01-.27-2.21L21.45.415a1.414 1.414 0 011-.414z"
          id={`key_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`key_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#key_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#key_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
