import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Height = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M7.152 0c.375 0 .735.15 1 .415l5.738 5.738a1.413 1.413 0 01-1 2.413l.001.001a1.41 1.41 0 01-1-.414L8.56 4.822v18.635l3.332-3.33a1.414 1.414 0 012 2l-5.738 5.737a1.409 1.409 0 01-1 .414h-.008c-.375 0-.734-.148-1-.413l-.066-.074-5.665-5.665a1.414 1.414 0 012-2l3.317 3.316V4.836L2.414 8.153a1.414 1.414 0 11-2-2L6.081.486l.014-.017.032-.034-.046.05a1.422 1.422 0 01.854-.468L6.99.01 7.01.008l.01-.001.023-.003A1.41 1.41 0 017.153 0z"
          id={`height_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(9 2)" fill="none" fillRule="evenodd">
        <mask id={`height_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#height_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#height_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-9-2h32v32H-9z" />
        </g>
      </g>
    </Svg>
  );
});
