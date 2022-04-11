import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Upload = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.815 9.38c.375 0 .735.15 1 .415l6.6 6.6a1.414 1.414 0 01-1 2.413v.001c-.375 0-.735-.148-1-.414l-4.182-4.182v12.651a1.414 1.414 0 11-2.827.001V14.204l-4.191 4.191a1.414 1.414 0 01-2-2l6.6-6.6a1.414 1.414 0 011-.414zM23.97 0a3.674 3.674 0 013.67 3.67v3.959a4.171 4.171 0 01-1.023 2.737l-1.737 2a1.415 1.415 0 01-2.134-1.855l1.737-2c.212-.245.33-.558.33-.882V3.67a.844.844 0 00-.843-.842H3.67a.844.844 0 00-.843.842v3.959c0 .324.118.637.33.882l1.737 2a1.414 1.414 0 11-2.134 1.855l-1.737-2A4.171 4.171 0 010 7.629V3.67A3.674 3.674 0 013.67 0h20.3z"
          id={`upload_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`upload_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#upload_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#upload_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
