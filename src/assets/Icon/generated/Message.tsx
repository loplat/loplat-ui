import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Message = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M6.742 0a1.414 1.414 0 110 2.828h-2.5a1.416 1.416 0 00-1.414 1.413v11.675c.001.78.634 1.413 1.414 1.414h4.435a4.21 4.21 0 013 1.243l2.463 2.462 2.462-2.463a4.213 4.213 0 013-1.242h4.436a1.416 1.416 0 001.414-1.414V4.241a1.416 1.416 0 00-1.414-1.413H10.195a1.414 1.414 0 110-2.828h13.842a4.245 4.245 0 014.241 4.241v11.675a4.245 4.245 0 01-4.241 4.241h-4.436c-.375 0-.734.15-1 .414l-3.462 3.463a1.411 1.411 0 01-1.999.003l-3.463-3.462a1.419 1.419 0 00-1-.415H4.242A4.246 4.246 0 010 15.919V4.241A4.246 4.246 0 014.242 0h2.5zm13.787 8.927a1.735 1.735 0 11-1.324 3.208 1.735 1.735 0 011.324-3.208zm-10.978 0a1.735 1.735 0 11-1.322 3.208A1.735 1.735 0 019.55 8.927zm5.488 0a1.735 1.735 0 11-1.322 3.208 1.735 1.735 0 011.322-3.208z"
          id={`message_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`message_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#message_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#message_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
