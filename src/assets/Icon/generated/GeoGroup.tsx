import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const GeoGroup = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
  const uniqueId = suffixForId ?? String(Math.random().toString(36).slice(2, 11));
  return (
    <Svg
      {...marginSpacingProps(props)}
      {...props}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <g fill="none" fillRule="evenodd">
        <path fillOpacity={0.5} fill="#E8C2FF" d="M13.691 4L3 12.281 7.938 22l11.41-1.314L23 10.876z" />
        <path
          d="M4.182 12.558l4.284 8.423 10.216-1.175 3.201-8.586-8.176-6.03-9.525 7.368zM7.917 23a.957.957 0 01-.852-.528l-4.958-9.746a.985.985 0 01.27-1.223L13.112 3.2a.95.95 0 011.146-.014l9.346 6.896c.35.258.487.723.334 1.133l-3.667 9.838a.961.961 0 01-.79.624L8.026 22.994a1.02 1.02 0 01-.109.006z"
          fill="#D998FF"
        />
        <g>
          <path d="M29 20a9 9 0 11-18 0 9 9 0 0118 0" fillOpacity={0.5} fill="#ABE9ED" />
          <path
            d="M20 12.04c-4.389 0-7.96 3.571-7.96 7.96 0 4.389 3.571 7.96 7.96 7.96 4.389 0 7.96-3.571 7.96-7.96 0-4.389-3.571-7.96-7.96-7.96M20 30c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10"
            fill="#6CDAE2"
          />
        </g>
      </g>
    </Svg>
  );
});
