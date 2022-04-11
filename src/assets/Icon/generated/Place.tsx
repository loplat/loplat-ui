import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Place = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M11.396 0a11.41 11.41 0 0111.4 11.737c-.4 9.7-10.218 16.053-10.635 16.319-.111.07-.23.125-.355.162a.837.837 0 01-.203.044 1.633 1.633 0 01-.201.015h-.007l-.038-.002-.089-.004-.012-.001.139.007a1.406 1.406 0 01-.36-.047l-.053-.016a.943.943 0 01-.088-.03l-.034-.014a1.3 1.3 0 01-.222-.114c-.275-.175-6.762-4.363-9.477-11.09a16.933 16.933 0 01-.457-1.275 1.415 1.415 0 012.7-.847c.113.358.24.715.382 1.062 1.86 4.61 5.923 7.976 7.614 9.229 2.172-1.613 8.288-6.739 8.57-13.515a8.426 8.426 0 00-2.374-6.138 8.516 8.516 0 00-6.186-2.654h-.015a8.582 8.582 0 00-8.57 8.792 1.413 1.413 0 01-1.354 1.471l-.054.001c-.758 0-1.38-.598-1.412-1.355A11.41 11.41 0 0111.395 0zm4.115 8.306a4.949 4.949 0 01-.616 6.249 4.917 4.917 0 01-3.5 1.449 4.949 4.949 0 114.116-7.698zm-4.116.629a2.12 2.12 0 00-1.616 3.495l.116.125c.839.802 2.16.802 3 0a2.121 2.121 0 00-1.5-3.62z"
          id={`place_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(5 2)" fill="none" fillRule="evenodd">
        <mask id={`place_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#place_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#place_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-5-2h32v32H-5z" />
        </g>
      </g>
    </Svg>
  );
});
