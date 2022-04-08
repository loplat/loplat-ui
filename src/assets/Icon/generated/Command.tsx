import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Command = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M22.37 0a5.9 5.9 0 010 11.8l.005.004h-3.077v4.667l3.08.001a5.904 5.904 0 010 11.807l-.003-.004a5.911 5.911 0 01-5.9-5.9l-.001-3.079h-4.667v3.075a5.911 5.911 0 01-5.904 5.904 5.904 5.904 0 010-11.807H8.98v-4.664H5.904a5.9 5.9 0 115.9-5.9l-.001 3.068h4.667V5.9a5.9 5.9 0 015.9-5.9zM8.98 19.296H5.903a3.076 3.076 0 103.077 3.075v-3.075zm13.395 0h-3.077v3.075a3.076 3.076 0 103.077-3.075zm-5.904-7.492h-4.664v4.664h4.664v-4.664zM5.904 2.824a3.076 3.076 0 000 6.152h3.075V5.9a3.08 3.08 0 00-3.075-3.076zm16.47 0A3.076 3.076 0 0019.3 5.9v3.076h3.076a3.076 3.076 0 100-6.152z"
          id={`command_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`command_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#command_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#command_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
