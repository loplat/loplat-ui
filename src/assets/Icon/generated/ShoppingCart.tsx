import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const ShoppingCart = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M11.621 17.717a2.474 2.474 0 110 4.948 2.474 2.474 0 010-4.948zm10.001 0a2.474 2.474 0 110 4.948 2.474 2.474 0 010-4.948zM9.782 0l14.517.1a3.536 3.536 0 013.461 4.206l-1.62 8.378a3.539 3.539 0 01-3.471 2.86H9.954a3.539 3.539 0 01-3.47-2.864L4.708 3.501a.706.706 0 00-.694-.573h-2.6a1.414 1.414 0 110-2.828h2.6a3.539 3.539 0 013.471 2.864l1.776 9.183a.707.707 0 00.693.573h12.715c.338 0 .63-.24.694-.572l1.62-8.379a.706.706 0 00-.694-.841l-14.528-.1A1.414 1.414 0 019.772 0h.01z"
          id={`shopping_cart_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 5)" fill="none" fillRule="evenodd">
        <mask id={`shopping_cart_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#shopping_cart_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#shopping_cart_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-5h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
