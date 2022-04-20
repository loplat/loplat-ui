import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Beat = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.886 20.151c-.622 0-1.17-.405-1.352-1L9.782 10.1 7.73 13.745c-.25.445-.722.72-1.233.72H1.414a1.414 1.414 0 110-2.828h4.257l3.271-5.81a1.414 1.414 0 012.585.282l2.359 7.76 3.9-12.866a1.414 1.414 0 012.714.027l2.987 10.607h3.378a1.414 1.414 0 010 2.828h-4.449c-.633 0-1.19-.42-1.36-1.03l-1.967-6.983-3.848 12.7c-.182.594-.73 1-1.352 1h-.003z"
          id={`beat_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 6)" fill="none" fillRule="evenodd">
        <mask id={`beat_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#beat_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#beat_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-6h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
