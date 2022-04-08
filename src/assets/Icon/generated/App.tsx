import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const App = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M15.363 22.177a3.182 3.182 0 11-2.436 5.88 3.182 3.182 0 012.436-5.88zm10.971 0a3.182 3.182 0 11-2.436 5.88 3.182 3.182 0 012.436-5.88zm-21.934 0a3.182 3.182 0 11-2.436 5.88 3.182 3.182 0 012.436-5.88zm9.745-11.207a3.181 3.181 0 11.002 6.362 3.181 3.181 0 01-.002-6.362zm10.971 0a3.181 3.181 0 11.002 6.362 3.181 3.181 0 01-.002-6.362zm-21.933 0a3.181 3.181 0 110 6.362 3.181 3.181 0 010-6.362zM15.363.242a3.182 3.182 0 11-2.436 5.88 3.182 3.182 0 012.436-5.88zm10.971 0a3.182 3.182 0 11-2.436 5.88 3.182 3.182 0 012.436-5.88zM4.4.242a3.182 3.182 0 11-2.436 5.88A3.182 3.182 0 014.4.242z"
          id={`app_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`app_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#app_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#app_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
