import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Crown = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.168 0c.506 0 .973.27 1.226.708l3.915 6.812 6.711-5.262a1.414 1.414 0 012.289 1.266l-.002 13.091a4.246 4.246 0 01-4.241 4.243H10.159a1.414 1.414 0 110-2.828h13.907a1.415 1.415 0 001.413-1.414V6.274l-5.715 4.476a1.408 1.408 0 01-2.093-.406l-3.5-6.094-3.5 6.094a1.414 1.414 0 01-2.1.408L2.858 6.277v10.338c0 .781.633 1.414 1.414 1.414a1.414 1.414 0 010 2.828l-.001.001A4.246 4.246 0 01.03 16.616V3.638a1.413 1.413 0 012.213-1.433c.029.021.058.043.085.065l6.699 5.25L12.942.708C13.195.27 13.662 0 14.168 0z"
          id={`crown_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 6)" fill="none" fillRule="evenodd">
        <mask id={`crown_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#crown_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#crown_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-6h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
