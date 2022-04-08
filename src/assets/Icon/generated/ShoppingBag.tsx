import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const ShoppingBag = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M11.85 0a5.673 5.673 0 015.672 5.673v1.011l.388.001a3.451 3.451 0 013.42 2.908l2 13.091a4.832 4.832 0 01-4.772 5.594H4.832a4.831 4.831 0 01-4.769-5.609l1.99-13.062a3.456 3.456 0 013.423-2.922l.7-.001V5.673A5.673 5.673 0 0111.85 0zm6.056 9.513h-1.798l-.02-.001H7.572l-2.096.001a.634.634 0 00-.629.534L2.857 23.11a2.006 2.006 0 001.975 2.341h13.722a2 2 0 001.978-2.327l-2-13.091a.63.63 0 00-.626-.52zM11.85 2.828a2.845 2.845 0 00-2.845 2.845v1.011h5.69V5.673a2.845 2.845 0 00-2.845-2.845z"
          id={`shopping_bag_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(4 2)" fill="none" fillRule="evenodd">
        <mask id={`shopping_bag_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#shopping_bag_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#shopping_bag_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-4-2h32v32H-4z" />
        </g>
      </g>
    </Svg>
  );
});
