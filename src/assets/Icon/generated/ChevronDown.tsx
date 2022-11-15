import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const ChevronDown = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.785 15.21c-.375 0-.734-.149-1-.414L.415 2.414a1.414 1.414 0 012-2l11.37 11.381L25.156.415a1.414 1.414 0 012 2l-12.37 12.381a1.417 1.417 0 01-1 .414z"
          id={`chevron_Down_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 8)" fill="none" fillRule="evenodd">
        <mask id={`chevron_Down_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#chevron_Down_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#chevron_Down_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-8h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
