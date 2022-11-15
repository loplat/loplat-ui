import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Circle = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
        <path
          d="M28 16.5C28 22.851 22.851 28 16.5 28S5 22.851 5 16.5 10.149 5 16.5 5 28 10.149 28 16.5"
          fill="#ABE9ED"
        />
        <path
          d="M16 5.653C10.295 5.653 5.653 10.295 5.653 16c0 5.705 4.642 10.347 10.347 10.347 5.705 0 10.347-4.642 10.347-10.347 0-5.705-4.642-10.347-10.347-10.347M16 29C8.831 29 3 23.169 3 16S8.831 3 16 3s13 5.831 13 13-5.831 13-13 13"
          fill="#6CDAE2"
        />
      </g>
    </Svg>
  );
});
