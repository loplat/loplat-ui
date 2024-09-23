import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Dynamic = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
  const uniqueId = suffixForId ?? String(Math.random().toString(36).slice(2, 11));
  return (
    <Svg
      {...marginSpacingProps(props)}
      {...props}
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.218 1.363A4.419 4.419 0 001.799 5.78a.613.613 0 01-1.225 0A5.644 5.644 0 112.93 10.37l.177 1.232a.612.612 0 01-1.213.173l-.438-3.062a.613.613 0 01.607-.7h3.062a.612.612 0 110 1.226h-1.66a4.419 4.419 0 102.753-7.875zm.394 1.575a.612.612 0 10-1.225 0V6c0 .338.274.613.612.613h3.063a.613.613 0 000-1.225h-2.45v-2.45z"
        fill="#1678FF"
      />
    </Svg>
  );
});
