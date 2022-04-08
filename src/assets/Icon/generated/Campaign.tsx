import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Campaign = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M17.727.98l10.256 16.886a2.035 2.035 0 01-1.97 3.078l-9.535-1.1-1.541.935 1.133 1.867a3.013 3.013 0 01-2.569 4.577v.003c-.243 0-.485-.03-.72-.087a2.988 2.988 0 01-1.86-1.363l-.346-.57a1.06 1.06 0 011.813-1.1l.346.57a.892.892 0 001.523-.929l-1.134-1.868-5.545 3.365a3.868 3.868 0 01-2.019.576 3.911 3.911 0 01-3.338-1.875L.565 21.218a3.9 3.9 0 011.308-5.353l9.226-5.6a1.414 1.414 0 011.96.447l.01.014 3.924 6.331 7.732.893-8.563-14.1-1.679 4.54a1.414 1.414 0 01-2.653-.98l2.25-6.08a2.034 2.034 0 013.647-.35zm-6.33 12.412l-8.056 4.89a1.071 1.071 0 00-.359 1.47l1.656 2.725a1.07 1.07 0 001.468.36l8.097-4.919-2.806-4.526z"
          id={`campaign_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`campaign_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#campaign_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#campaign_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
