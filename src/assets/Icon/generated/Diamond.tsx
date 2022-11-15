import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Diamond = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M17.312 0l7.64.002c.497 0 .958.261 1.213.688l5.3 8.86a1.414 1.414 0 01-.147 1.653L16.926 27.764a1.413 1.413 0 01-.244.233c-.006.003-.011.008-.017.012-.034.026-.069.049-.105.07l-.019.01c-.034.022-.07.04-.108.058l-.03.013c-.031.014-.061.026-.092.037l-.033.011-.01.004a1.412 1.412 0 01-.437.069l-.112-.007h-.026-.002l.14.007a1.433 1.433 0 01-.403-.06l-.014-.003a1.433 1.433 0 01-.03-.01l-.056-.02a1.413 1.413 0 01-.027-.01l-.028-.014-.02-.007-.023-.01a1.414 1.414 0 01-.05-.025l-.025-.013a1.408 1.408 0 01-.09-.053l-.023-.015a1.405 1.405 0 01-.052-.037l-.008-.007a.702.702 0 01-.1-.082.961.961 0 01-.051-.048l-.037-.04a.882.882 0 01-.05-.054L.346 11.203A1.415 1.415 0 01.2 9.55l2.04-3.411A1.414 1.414 0 014.666 7.59l-1.513 2.531 11.977 13.782 1.698-6.662.178-.7 1.234-4.852h-1.867a1.414 1.414 0 010-2.828h1.757l-1.903-6.032h-8.72l-.895 1.5a1.413 1.413 0 01-2.422-1.455L5.491.69A1.414 1.414 0 016.705.002L17.226.001h.086zm9.835 11.689H21.16l-2.48 9.745 8.467-9.745zM12.809 8.861a1.414 1.414 0 010 2.828h-.835a1.414 1.414 0 010-2.828h.835zM24.15 2.829h-4.953l1.906 6.032h6.654L24.15 2.829z"
          id={`diamond_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(0 2)" fill="none" fillRule="evenodd">
        <mask id={`diamond_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#diamond_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#diamond_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M0-2h32v32H0z" />
        </g>
      </g>
    </Svg>
  );
});
