import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const ArrowRight = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.784.414l12.372 12.372c.266.265.415.625.415 1l-.007.113-.001.026c-.013.14-.047.273-.098.397l-.012.029c-.014.033-.03.064-.045.095l-.013.023c-.04.073-.086.142-.138.206l-.017.02a1.1 1.1 0 01-.074.082l-.01.01-12.372 12.371a1.414 1.414 0 01-2-2l9.959-9.959-21.329-.022a1.414 1.414 0 01-.136-2.821l.136-.007 21.327.022-9.957-9.957a1.414 1.414 0 012-2z"
          id={`arrow_right_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2.002 2)" fill="none" fillRule="evenodd">
        <mask id={`arrow_right_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#arrow_right_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#arrow_right_svg__b__${uniqueId})`} fillRule="nonzero">
          <path d="M19.55 1.077a14.14 14.14 0 018.728 13.064c-.009 7.806-6.334 14.131-14.14 14.14A14.14 14.14 0 1119.55 1.076zm-5.412 10.48c-.78 0-1.414.632-1.414 1.413v7.172a1.415 1.415 0 002.828 0V12.97c0-.78-.633-1.414-1.414-1.414zm0-4.942a1.488 1.488 0 100 2.976 1.488 1.488 0 000-2.976z" />
        </g>
        <g mask={`url(#arrow_right_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2.002-2h32v32h-32z" />
        </g>
      </g>
    </Svg>
  );
});
