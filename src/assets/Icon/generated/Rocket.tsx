import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Rocket = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M26.833.389c.531.12.946.534 1.066 1.066a15.175 15.175 0 01-4.082 14.163l-3.238 3.239-.063 4.034a5.632 5.632 0 01-1.656 3.91l-1.074 1.074a1.411 1.411 0 01-2 0L13.46 25.55a1.414 1.414 0 012-2l1.327 1.327.074-.074c.521-.52.818-1.22.828-1.955l.073-4.607c.006-.368.154-.719.414-.978l3.644-3.643a12.357 12.357 0 003.494-10.642A12.352 12.352 0 0014.671 6.47l-3.643 3.644c-.26.26-.61.408-.978.414l-4.607.073a2.814 2.814 0 00-1.955.828l-.074.073 1.375 1.376a1.414 1.414 0 11-2 2L.414 12.504a1.414 1.414 0 010-2L1.488 9.43a5.628 5.628 0 013.91-1.656l4.034-.064 3.24-3.238A15.165 15.165 0 0126.832.389zm-13.395 18.17a1.414 1.414 0 010 2l-3.249 3.25a1.414 1.414 0 11-2.001-2.001l3.25-3.248a1.414 1.414 0 012 0zm-3.657-3.754a1.414 1.414 0 010 2l-4.17 4.17a1.414 1.414 0 11-2.001-2.001l4.171-4.17a1.414 1.414 0 012 0zm8.858-8.263c.48.6.393 1.475-.198 1.969a.943.943 0 00-.35.89.98.98 0 00.541.727.89.89 0 00.8 0c.289-.14.491-.411.542-.727a.941.941 0 00-.268-.815 1.415 1.415 0 012-2 3.785 3.785 0 01-.954 6.043 3.68 3.68 0 01-1.722.419 3.681 3.681 0 01-1.718-.42 3.784 3.784 0 01-.637-6.325 1.414 1.414 0 011.964.239z"
          id={`rocket_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`rocket_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#rocket_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#rocket_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
