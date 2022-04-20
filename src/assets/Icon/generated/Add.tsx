import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Add = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.17 0l.147.008a1.413 1.413 0 011.268 1.406l-.001 11.311h11.317a1.414 1.414 0 01.139 2.824l-.14.003H15.585v11.311c0 .735-.56 1.339-1.277 1.408l-.136.006c-.781 0-1.414-.633-1.414-1.414l-.001-11.311H1.452a1.414 1.414 0 110-2.827h11.304V1.414A1.414 1.414 0 0114.172 0z"
          id={`add_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`add_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#add_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#add_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
