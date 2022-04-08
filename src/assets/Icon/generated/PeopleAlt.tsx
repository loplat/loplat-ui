import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const PeopleAlt = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M2.828 15.347c0 .735-.56 1.339-1.278 1.408l-.136.006c-.78 0-1.414-.633-1.414-1.414a7.447 7.447 0 014.196-6.694 5.368 5.368 0 119.614-3.286 5.355 5.355 0 01-1.366 3.574c.284.165.557.352.817.556a6.553 6.553 0 0112.595 2.537 6.537 6.537 0 01-1.768 4.472 9.254 9.254 0 015.606 8.496 1.415 1.415 0 01-2.831 0 6.423 6.423 0 00-6.415-6.416h-1.144l-.051-.001-1.253.001a6.423 6.423 0 00-6.416 6.416 1.414 1.414 0 11-2.828 0 9.257 9.257 0 015.715-8.542 6.544 6.544 0 01-1.68-3.69 1.403 1.403 0 01-.627-.421 4.607 4.607 0 00-3.5-1.613H7.439a4.616 4.616 0 00-4.611 4.611zm16.476-7.038a3.725 3.725 0 100 7.45 3.725 3.725 0 000-7.45zM8.442 2.826a2.541 2.541 0 00.001 5.081 2.54 2.54 0 00.166-5.074l-.167-.007z"
          id={`people_alt_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(1 3)" fill="none" fillRule="evenodd">
        <mask id={`people_alt_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#people_alt_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#people_alt_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-1-3h32v32H-1z" />
        </g>
      </g>
    </Svg>
  );
});
