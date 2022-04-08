import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const GridView = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M10.393 16.471c.78 0 1.414.633 1.414 1.414v8.98c0 .735-.56 1.339-1.278 1.408l-.136.006H1.414c-.78 0-1.414-.633-1.414-1.414v-8.98c0-.78.633-1.414 1.414-1.414h8.979zm16.472 0c.78 0 1.413.633 1.414 1.414v8.98c0 .735-.561 1.338-1.278 1.407l-.136.007h-8.98c-.78 0-1.414-.633-1.414-1.414v-8.98c0-.78.633-1.414 1.414-1.414h8.98zM8.979 19.299H2.828v6.152h6.151v-6.152zm16.472 0h-6.152v6.152h6.152v-6.152zM10.393 0c.78 0 1.414.633 1.414 1.414v8.979c0 .735-.56 1.339-1.278 1.408l-.136.006H1.414c-.78 0-1.414-.633-1.414-1.414V1.414C0 .634.633 0 1.414 0h8.979zm16.472 0c.78 0 1.414.633 1.414 1.414v8.979c0 .735-.561 1.338-1.278 1.407l-.136.007h-8.98c-.78 0-1.414-.633-1.414-1.414V1.414c0-.78.633-1.414 1.414-1.414h8.98zM8.979 2.828H2.828v6.151h6.151V2.828zm16.472 0h-6.152v6.151h6.152V2.828z"
          id={`grid_view_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`grid_view_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#grid_view_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#grid_view_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
