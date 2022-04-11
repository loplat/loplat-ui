import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Gpp = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M12.084.094l10.162 3.878c.548.208.91.734.91 1.32v7.923A15.762 15.762 0 0112.143 28.17c-.171.074-.36.115-.557.116l-.009-.003h-.002l-.013-.002-.122-.005a1.392 1.392 0 01-.278-.056A15.758 15.758 0 010 13.218V5.296c0-.587.362-1.112.91-1.32l2.814-1.074a1.414 1.414 0 011.008 2.642l-1.9.727v6.947a12.917 12.917 0 008.744 12.168 12.917 12.917 0 008.752-12.171V6.267l-8.748-3.34-3.308 1.264a1.414 1.414 0 11-1.008-2.642L11.076.094a1.4 1.4 0 011.008 0zm-.425 6.359A1.414 1.414 0 0112.76 8.66l-1.883 2.886h4.009a1.414 1.414 0 011.209 2.147l-3.31 5.456a1.413 1.413 0 11-2.418-1.466l2.008-3.31H8.266a1.413 1.413 0 01-1.184-2.186l3.31-5.072a1.414 1.414 0 011.267-.663z"
          id={`gpp_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(4 2)" fill="none" fillRule="evenodd">
        <mask id={`gpp_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#gpp_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#gpp_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-4-2h32v32H-4z" />
        </g>
      </g>
    </Svg>
  );
});
