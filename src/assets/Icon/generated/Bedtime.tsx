import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Bedtime = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.176 28.283a14.247 14.247 0 01-3.684-.488C3.304 25.875-1.166 18.714.267 11.414c1.433-7.3 8.28-12.24 15.66-11.3a1.415 1.415 0 01.833 2.393 9.132 9.132 0 00-1.382 10.919 9.131 9.131 0 0010.147 4.263 1.414 1.414 0 011.655 1.916 14.129 14.129 0 01-13 8.678h-.004zm-1.23-25.394a11.31 11.31 0 00-8.593 16.9 11.307 11.307 0 0018.937 1.008h-.01c-4.265 0-8.21-2.27-10.352-5.96a11.975 11.975 0 01.019-11.948z"
          id={`bedtime_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`bedtime_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#bedtime_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#bedtime_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
