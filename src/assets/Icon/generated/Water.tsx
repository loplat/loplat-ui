import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Water = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M11.442 0l.033.002a1.41 1.41 0 01.667.205l.023.014c.417.267 10.232 6.624 10.636 16.32a11.411 11.411 0 01-11.058 11.733l-.338.005h-.002l-.34-.005A11.41 11.41 0 01.005 16.541a1.413 1.413 0 011.41-1.355h.06c.78.033 1.387.692 1.355 1.472a8.43 8.43 0 002.374 6.138 8.522 8.522 0 006.2 2.654l.015.001.3-.006a8.584 8.584 0 008.257-8.786c-.283-6.797-6.393-11.91-8.57-13.518C9.72 4.392 5.657 7.76 3.79 12.37c-.143.354-.272.712-.382 1.063a1.414 1.414 0 11-2.698-.847c.133-.42.287-.85.458-1.275C3.884 4.584 10.368.396 10.646.222l.028-.018a1.41 1.41 0 01.073-.041l-.101.058a1.428 1.428 0 01.76-.221h.036z"
          id={`water_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(5 2)" fill="none" fillRule="evenodd">
        <mask id={`water_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#water_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#water_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-5-2h32v32H-5z" />
        </g>
      </g>
    </Svg>
  );
});
