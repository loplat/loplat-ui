import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const PersonAdd = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M11.001 4c3.756 0 6.8 3.04 6.8 6.789a6.762 6.762 0 01-2.051 4.859c3.65 1.385 6.245 4.909 6.25 9.038a1.281 1.281 0 01-2.563 0c-.005-3.924-3.19-7.104-7.122-7.109h-2.63c-3.93.005-7.117 3.185-7.121 7.11a1.284 1.284 0 11-2.563 0c.004-4.13 2.6-7.654 6.25-9.04a6.762 6.762 0 01-2.05-4.858C4.2 7.039 7.245 4 11 4zm0 2.567a4.229 4.229 0 00-4.232 4.226 4.229 4.229 0 004.233 4.224 4.229 4.229 0 004.233-4.225A4.233 4.233 0 0011 6.567zM24.5 0c.828 0 1.5.563 1.5 1.257V4h2.704c.459-.014.888.269 1.121.739.233.47.233 1.053 0 1.522-.233.47-.662.753-1.121.738H26v2.744c0 .334-.158.653-.44.889A1.659 1.659 0 0124.5 11c-.828 0-1.5-.563-1.5-1.257V7h-2.704c-.459.015-.888-.268-1.121-.738a1.746 1.746 0 010-1.522c.233-.47.662-.753 1.121-.738L23 4V1.257C23 .563 23.672 0 24.5 0z"
          id={`person_add_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(1 3)" fill="none" fillRule="evenodd">
        <mask id={`person_add_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#person_add_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#person_add_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-1-3h32v32H-1z" />
        </g>
      </g>
    </Svg>
  );
});
