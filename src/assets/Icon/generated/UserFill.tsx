import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const UserFill = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M13.432 16.47a8.235 8.235 0 118.235-8.235 8.244 8.244 0 01-8.235 8.235zm1.624-2.828c6.518.007 11.8 5.289 11.808 11.807 0 .597-.37 1.108-.894 1.315l.03.058-.215.001a1.417 1.417 0 01-.67 0H1.877c-.3.104-.628.104-.928 0l-.065-.001.006-.023a1.414 1.414 0 01-.89-1.35c.007-6.517 5.288-11.8 11.806-11.807h3.249z"
          id={`user-fill_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(3 3)" fill="none" fillRule="evenodd">
        <mask id={`user-fill_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#user-fill_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#user-fill_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-3-3h32v32H-3z" />
        </g>
      </g>
    </Svg>
  );
});
