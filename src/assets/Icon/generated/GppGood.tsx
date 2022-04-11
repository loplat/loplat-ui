import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const GppGood = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M12.085.093l10.158 3.872c.548.209.91.735.91 1.321v7.921a15.766 15.766 0 01-11.03 14.963 1.424 1.424 0 01-.537.107l-.009-.002h-.008a1.41 1.41 0 01-.398-.06A15.766 15.766 0 010 13.208V5.287C0 4.7.362 4.175.91 3.966l2.814-1.073a1.413 1.413 0 011.008 2.641l-1.9.727v6.947a12.921 12.921 0 008.746 12.168 12.922 12.922 0 008.752-12.17V6.265l-8.749-3.338-3.308 1.262a1.414 1.414 0 11-1.008-2.642L11.077.093a1.412 1.412 0 011.008 0zm4.606 9.054a1.414 1.414 0 01.634 2.366l-5.846 5.846a1.409 1.409 0 01-1 .414h-.004a1.4 1.4 0 01-.383-.054l-.034-.01a1.175 1.175 0 01-.11-.04l-.016-.007a1.339 1.339 0 01-.225-.118l-.023-.017a1.01 1.01 0 01-.094-.068.634.634 0 01-.064-.055l-3.23-2.945a1.414 1.414 0 111.9-2.09l2.234 2.038 4.895-4.894a1.414 1.414 0 011.366-.366z"
          id={`gpp_good_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(4 2)" fill="none" fillRule="evenodd">
        <mask id={`gpp_good_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#gpp_good_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#gpp_good_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-4-2h32v32H-4z" />
        </g>
      </g>
    </Svg>
  );
});
