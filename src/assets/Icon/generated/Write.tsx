import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Write = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.47 2.127a1.414 1.414 0 01.01 2.828l-10.935.079a.709.709 0 00-.717.707v18.3c0 .78.633 1.413 1.414 1.414h17.594c.78 0 1.413-.633 1.414-1.414V13.25a1.414 1.414 0 012.828 0v10.79a4.247 4.247 0 01-4.242 4.242H4.242A4.246 4.246 0 010 24.04V5.74a3.539 3.539 0 013.535-3.535l10.924-.08h.011zm12.453-.905a4.172 4.172 0 010 5.9l-10.6 10.6a1.419 1.419 0 01-.666.374l-5.147 1.25c-.11.026-.224.038-.337.037a1.413 1.413 0 01-1.374-1.747l1.25-5.148c.062-.252.191-.482.374-.666l10.6-10.6a4.172 4.172 0 015.9 0zM20.681 5.56l-7.977 7.98-.609 2.508 2.506-.61 7.966-7.966-1.736-1.735a1.424 1.424 0 01-.15-.177zm2.341-2.342l-.369.368c.062.045.122.095.178.15l1.736 1.736.355-.354a1.344 1.344 0 00-1.9-1.9z"
          id={`write_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`write_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#write_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#write_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
