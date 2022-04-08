import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Store = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M6.61 24.715a4.247 4.247 0 01-4.242-4.242v-5.957a1.414 1.414 0 012.828 0v5.957c0 .78.634 1.413 1.414 1.414l3.14-.001v-4.069a4.3 4.3 0 014.29-4.291h.294a4.3 4.3 0 014.29 4.291v4.069l3.08.001a1.416 1.416 0 001.413-1.414v-8.1a5.852 5.852 0 01-2.417-1.105 4.671 4.671 0 01-3.2 1.22 5.215 5.215 0 00-6.7 0 4.671 4.671 0 01-3.2-1.22 5.852 5.852 0 01-3.5 1.22 4.091 4.091 0 01-3.414-1.627 3.931 3.931 0 01-.432-3.61L1.94 2.379A3.536 3.536 0 015.28 0h17.73c1.506 0 2.846.955 3.34 2.379l1.684 4.872a3.931 3.931 0 01-.432 3.61 4.09 4.09 0 01-1.656 1.299v8.313a4.246 4.246 0 01-4.242 4.242H6.61zm7.724-8.361h-.294a1.464 1.464 0 00-1.462 1.463v4.07h3.22v-4.07a1.465 1.465 0 00-1.464-1.463zm8.683-13.526H5.288c-.3 0-.568.19-.667.475L2.935 8.175c-.15.338-.126.728.063 1.046.279.316.692.48 1.111.439a3.154 3.154 0 002.506-1.413 1.414 1.414 0 012.543.354c.251.68.923 1.113 1.646 1.059a2.3 2.3 0 002.07-1.253 1.414 1.414 0 012.557 0 2.3 2.3 0 002.07 1.253 1.625 1.625 0 001.646-1.059c.16-.528.612-.915 1.158-.991l.1-.01.097-.004.142.008c.426.044.812.278 1.046.643a3.154 3.154 0 002.506 1.413h.01c.141-.034.285-.045.429-.035.257-.06.493-.2.672-.404.19-.318.213-.708.062-1.046l-1.684-4.872a.708.708 0 00-.668-.475z"
          id={`store_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`store_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#store_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#store_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
