import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Heart = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.115 24.736c-.253 0-.502-.07-.72-.2C6.542 20.482-1.047 13.276.12 6.313A7.514 7.514 0 016.332.12a8.3 8.3 0 017.784 2.863 8.234 8.234 0 017.55-2.875 7.742 7.742 0 016.436 6.156c1.393 6.86-5.94 13.937-13.267 18.27-.217.131-.466.2-.72.2zm-6.407-21.9c-.297 0-.594.025-.887.076a4.673 4.673 0 00-3.913 3.874C2.07 11.792 7.824 17.77 14.116 21.673c5.99-3.706 12.271-9.636 11.215-14.84a4.939 4.939 0 00-4.106-3.925 5.714 5.714 0 00-5.879 3.218 1.414 1.414 0 01-2.463 0 5.92 5.92 0 00-5.175-3.293v.003z"
          id={`heart_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`heart_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#heart_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#heart_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
