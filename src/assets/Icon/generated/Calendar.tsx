import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Calendar = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M19.569 0c.78 0 1.414.633 1.414 1.414v5.324c0 .735-.56 1.339-1.278 1.408l-.136.006a1.412 1.412 0 01-1.414-1.413l-.001-1.327h-8.03v1.326A1.414 1.414 0 018.85 8.145l-.14.007a1.412 1.412 0 01-1.414-1.413l-.001-1.327h-3.76a.708.708 0 00-.707.707v17.105c0 .39.317.706.707.707h21.208c.39 0 .706-.317.707-.707V6.119a.708.708 0 00-.707-.707h-1.191a1.414 1.414 0 010-2.827h1.191a3.538 3.538 0 013.534 3.534v17.105a3.538 3.538 0 01-3.534 3.534H3.535A3.538 3.538 0 010 23.224V6.119a3.538 3.538 0 013.535-3.534h3.76l.001-1.171c0-.735.56-1.339 1.278-1.408L8.71 0a1.412 1.412 0 011.414 1.412v1.173h8.03l.001-1.171c0-.735.56-1.339 1.278-1.408L19.569 0zm-4.458 17.631a1.422 1.422 0 01-.98 2.449v.005a1.373 1.373 0 01-.965-.4l-.033-.033a1.414 1.414 0 011.978-2.021zm-6.392-.384a1.414 1.414 0 01-.011 2.828v.002a1.4 1.4 0 01-1.414-1.4v-.032a1.414 1.414 0 011.425-1.398zm10.863 0a1.414 1.414 0 01-.012 2.828v.002a1.4 1.4 0 01-1.413-1.4v-.032a1.414 1.414 0 011.425-1.398zm-4.471-5.13a1.421 1.421 0 01-.98 2.448v.005a1.373 1.373 0 01-.965-.4l-.033-.033a1.414 1.414 0 111.978-2.02zm-6.392-.387a1.414 1.414 0 01-.011 2.828v.003a1.4 1.4 0 01-1.414-1.4v-.033a1.414 1.414 0 011.425-1.398zm10.863 0a1.414 1.414 0 01-.012 2.828v.003a1.4 1.4 0 01-1.413-1.4v-.033a1.414 1.414 0 011.425-1.398z"
          id={`calendar_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 3)" fill="none" fillRule="evenodd">
        <mask id={`calendar_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#calendar_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#calendar_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-3h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
