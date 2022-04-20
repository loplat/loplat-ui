import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Alert = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M9.003 1.24l.81.81a12.185 12.185 0 017.924 0l.81-.808a4.245 4.245 0 016 0l1.762 1.763a4.247 4.247 0 010 6l-.918.92a12.16 12.16 0 01-3.678 12.865l2.575 3.335a1.414 1.414 0 01-1.119 2.278h-.002c-.438.001-.851-.202-1.12-.548l-2.686-3.48a12.153 12.153 0 01-5.587 1.35 12.155 12.155 0 01-5.587-1.353l-2.688 3.482a1.412 1.412 0 11-2.236-1.728l2.574-3.337A12.161 12.161 0 012.16 9.924l-.919-.92a4.248 4.248 0 010-6L3.003 1.24a4.248 4.248 0 016 0zm1.34 3.627l-.313.13a9.426 9.426 0 00-4.925 5.086l-.012.024-.09.238a9.344 9.344 0 1017.44-.262 9.423 9.423 0 00-4.925-5.085 9.33 9.33 0 00-7.174-.13zm3.434 1.21c.781 0 1.414.634 1.414 1.415v5.172l3.981 1.906a1.414 1.414 0 01-.61 2.689h-.004a1.4 1.4 0 01-.61-.14l-4.785-2.29c-.49-.235-.8-.73-.8-1.274V7.492c0-.781.633-1.414 1.414-1.414zm6.768-2.835l-.126.126A12.272 12.272 0 0124.13 7.18l.176-.176c.551-.553.551-1.447 0-2l-1.762-1.762a1.451 1.451 0 00-2 0zM5.003 3.24L3.241 5.003a1.417 1.417 0 000 2l.177.176A12.272 12.272 0 017.13 3.368l-.127-.127a1.417 1.417 0 00-2 0z"
          id={`alert_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`alert_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#alert_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#alert_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
