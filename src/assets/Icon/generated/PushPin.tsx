import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const PushPin = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.448 0a2.812 2.812 0 011.992.82l6.292 6.243.044.051 4.075 4.043a2.832 2.832 0 01.016 4l-1.816 1.829a2.84 2.84 0 01-3.962.05l-.9-.861-.807.822a4.253 4.253 0 00-1.213 3.153l.076 1.787a4.254 4.254 0 01-1.244 3.186l-2.167 2.16a1.41 1.41 0 01-.995.411 1.407 1.407 0 01-1-.41l-5.21-5.169-5.092 5.131A1.414 1.414 0 01.53 25.255l6.088-6.136a1.412 1.412 0 011-.418h.006c.373 0 .731.147.995.41l5.217 5.175 1.171-1.167c.281-.28.432-.665.415-1.062l-.076-1.787a7.09 7.09 0 012.021-5.256l1.786-1.818a1.416 1.416 0 011.987-.03l1.906 1.828 1.815-1.83-6.293-6.242-.052-.058-4.068-4.036-1.814 1.828 1.842 1.893c.536.55.534 1.429-.005 1.977l-1.763 1.794a7.1 7.1 0 01-5.289 2.11l-1.774-.063c-.39-.01-.767.14-1.047.412L3.423 13.95l2.134 2.117a1.414 1.414 0 01-1 2.418l-.002-.002c-.372 0-.73-.147-.995-.41l-3.144-3.12a1.415 1.415 0 010-2.005l2.182-2.174A4.314 4.314 0 015.74 9.539l1.774.063a4.266 4.266 0 003.173-1.266l.794-.808-.877-.9a2.84 2.84 0 01.02-3.963L12.436.836a2.806 2.806 0 012-.836h.011z"
          id={`push_pin_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`push_pin_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#push_pin_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#push_pin_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
