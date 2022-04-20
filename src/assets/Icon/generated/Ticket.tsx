import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Ticket = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M26.267 0c1.11.001 2.01.9 2.011 2.011v4.918c0 .78-.633 1.414-1.414 1.414a2.021 2.021 0 10-.048 4.042c.79-.004 1.44.624 1.462 1.414v4.816c0 1.111-.9 2.012-2.011 2.014l-12.105.002h-.022l-.001-.002H2.012A2.014 2.014 0 010 18.617v-4.816c0-.78.633-1.414 1.414-1.414a2.021 2.021 0 00.2-4.035l-.151-.007-.069-.003-.069-.003A1.457 1.457 0 010 6.931V2.013A2.013 2.013 0 012.012.002H5.35a1.414 1.414 0 010 2.828H2.829v2.882a4.862 4.862 0 012.897 2.34l.034.065a4.72 4.72 0 01.326.778l.018.06a4.845 4.845 0 01-2.57 5.8l-.064.029-.1.044-.085.035a5.566 5.566 0 01-.222.084l-.05.016c-.055.02-.11.037-.167.054l-.017.004v2.782l11.27-.001.04-.001h11.312l-.001-2.788c-.066-.02-.13-.04-.195-.063l.052.016-.107-.035a4.845 4.845 0 01.251-9.22V2.828H9.594a1.414 1.414 0 110-2.828h16.673zm-8.886 10.999a1.414 1.414 0 010 2.828h-6.483a1.414 1.414 0 110-2.828h6.483zm0-4.195a1.414 1.414 0 01.14 2.824l-.14.003h-6.483a1.414 1.414 0 110-2.827h6.483z"
          id={`ticket_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 6)" fill="none" fillRule="evenodd">
        <mask id={`ticket_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#ticket_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#ticket_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-6h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
