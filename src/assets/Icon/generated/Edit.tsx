import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Edit = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M26.627 1.655a5.65 5.65 0 010 7.99l-16.3 16.3a1.411 1.411 0 01-.666.374l-7.914 1.922A1.414 1.414 0 01.04 26.534l.65-2.678a1.413 1.413 0 01.18-.747l1.092-4.488c.062-.252.191-.482.374-.666l16.3-16.3a5.65 5.65 0 017.99 0zm.238 23.8a1.414 1.414 0 110 2.827H11.991a1.414 1.414 0 010-2.828h14.874zm-8.934-19.1L4.614 19.675l-.908 3.737 1.158 1.163 3.741-.909 12.938-12.939-3.207-3.207a1.412 1.412 0 01-.405-1.165zm2.698-2.697l-1.458 1.457c.415-.048.847.087 1.165.405l3.207 3.208 1.078-1.079a2.822 2.822 0 10-3.992-3.99z"
          id={`edit_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`edit_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#edit_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#edit_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
