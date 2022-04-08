import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Money = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M7.536 0l.045.002H20.72L25.45 0a2.826 2.826 0 012.262 1.133 2.82 2.82 0 01.567 1.697v15.446a2.83 2.83 0 01-2.32 2.782l-.167.025c-.112.014-.226.02-.342.021h-4.709l-.02-.001H7.556l-.02.001H2.83a2.83 2.83 0 01-2.828-2.828L.001 7.582 0 2.828A2.831 2.831 0 012.828 0h4.708zM2.83 15.197v3.077l3.072-.001-.076-.22a4.733 4.733 0 00-2.996-2.856zm22.623.003a4.732 4.732 0 00-3.08 3.073h3.08V15.2zm-5.99-12.373H8.816a7.553 7.553 0 01-5.986 5.99v3.473a7.552 7.552 0 015.987 5.984h10.646a7.552 7.552 0 015.993-5.985V8.818a7.552 7.552 0 01-5.993-5.99zm-3.458 1.778a1.414 1.414 0 010 2.828h-2.426a.853.853 0 000 1.705h.908a3.683 3.683 0 013.679 3.68 3.683 3.683 0 01-3.679 3.679H12.06a1.414 1.414 0 010-2.828h2.427a.852.852 0 000-1.703H13.579a3.685 3.685 0 01-3.68-3.681 3.684 3.684 0 013.68-3.68h2.426zm9.446-1.776h-3.077a4.728 4.728 0 003.077 3.077V2.829zM5.906 2.828H2.83v3.077l.227-.078a4.73 4.73 0 002.849-2.999z"
          id={`money_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 5)" fill="none" fillRule="evenodd">
        <mask id={`money_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#money_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#money_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-5h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
