import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Android = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M18.28 9.072v9.181c0 1.14-.924 2.064-2.064 2.064h-.175v4.728c0 .94-.766 1.706-1.706 1.706a1.708 1.708 0 01-1.706-1.706v-4.728h-2.568v4.728c0 .94-.765 1.706-1.706 1.706-.94 0-1.706-.766-1.706-1.706v-4.728h-.174a2.064 2.064 0 01-2.064-2.064v-9.18H18.28zm-16.574.001c.94 0 1.705.766 1.705 1.706v5.839c0 .94-.765 1.706-1.705 1.706-.94 0-1.706-.766-1.706-1.706v-5.839c0-.94.766-1.706 1.706-1.706zm19.28 0c.94 0 1.706.765 1.706 1.705v5.84c0 .94-.766 1.706-1.706 1.706s-1.706-.766-1.706-1.706v-5.84c0-.94.766-1.705 1.706-1.705zM15.146.251a.5.5 0 11.865.5l-1.183 2.047a6.944 6.944 0 013.402 5.15H4.462a6.938 6.938 0 013.402-5.15L6.68.75a.499.499 0 11.865-.5l1.186 2.052c.01.018.01.038.019.057a6.907 6.907 0 015.189 0c.009-.02.009-.04.02-.057z"
          id={`android_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(5 3)" fill="none" fillRule="evenodd">
        <mask id={`android_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#android_svg__a__${uniqueId}`} />
        </mask>
        <use fill="#000" xlinkHref={`#android_svg__a__${uniqueId}`} />
        <g mask={`url(#android_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-5-3h32v32H-5z" />
        </g>
      </g>
    </Svg>
  );
});
