import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const CallDisabled = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M25.56 2.714c.5.5.505 1.309.012 1.815L13.59 16.51l1.192 1.191c.87.831 2.24.831 3.112 0l1.064-1.063a4.31 4.31 0 016.089 0l1.964 1.964a4.306 4.306 0 010 6.089 12.2 12.2 0 01-8.657 3.582 12.2 12.2 0 01-8.658-3.58L7.55 22.549l-5.23 5.229a1.288 1.288 0 01-2.105-.419c-.2-.482-.09-1.037.28-1.407l10.143-10.145a1.428 1.428 0 01.251-.25L23.745 2.701a1.292 1.292 0 011.814.012zm-4.604 15.924l-1.063 1.063a5.034 5.034 0 01-7.112 0l-1.192-1.191-2.039 2.039 2.145 2.145a9.427 9.427 0 0013.316 0 1.481 1.481 0 000-2.092l-1.964-1.964a1.515 1.515 0 00-2.091 0zM6.625 0a4.275 4.275 0 013.044 1.262l1.965 1.965a4.309 4.309 0 010 6.088l-1.063 1.063a2.195 2.195 0 00-.248 2.819 1.414 1.414 0 11-2.314 1.627 5.018 5.018 0 01.562-6.445l1.063-1.063a1.48 1.48 0 000-2.09L7.669 3.261a1.514 1.514 0 00-2.09 0 9.428 9.428 0 000 13.317 1.414 1.414 0 01-.859 2.407l-.141.007-.138-.007a1.409 1.409 0 01-.86-.407c-4.775-4.785-4.775-12.531 0-17.316A4.276 4.276 0 016.38.006L6.625 0z"
          id={`call_disabled_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`call_disabled_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#call_disabled_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#call_disabled_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
