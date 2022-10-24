import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '@Core/Spacing';
import Svg from '../../svg';
export const Verified = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.133 0c1.353 0 2.65.542 3.6 1.505.405.31.84.578 1.3.8a8.11 8.11 0 001.565.378 4.958 4.958 0 014.986 4.986c.073.533.2 1.057.378 1.565.222.46.49.895.8 1.3a5.057 5.057 0 010 7.2c-.31.405-.578.84-.8 1.3a8.039 8.039 0 00-.378 1.565 4.956 4.956 0 01-4.986 4.985 8 8 0 00-1.564.38c-.46.22-.895.489-1.3.8a6.333 6.333 0 01-3.601 1.505 6.336 6.336 0 01-3.6-1.507 7.525 7.525 0 00-1.3-.8 8.015 8.015 0 00-1.565-.379 4.956 4.956 0 01-4.985-4.985 8.035 8.035 0 00-.378-1.565 7.533 7.533 0 00-.8-1.3 5.059 5.059 0 010-7.2 7.5 7.5 0 00.8-1.3 8.006 8.006 0 00.378-1.564 4.956 4.956 0 014.984-4.985 8.026 8.026 0 001.566-.379c.459-.222.894-.49 1.3-.8A5.058 5.058 0 0114.133 0zm0 2.82a4.167 4.167 0 00-1.97.987 9.658 9.658 0 01-1.847 1.107c-.695.262-1.417.447-2.152.551a2.367 2.367 0 00-2.7 2.7c-.106.735-.29 1.457-.551 2.152a9.579 9.579 0 01-1.107 1.846 2.458 2.458 0 000 3.94 9.68 9.68 0 011.107 1.847c.26.695.445 1.416.55 2.151a2.369 2.369 0 002.7 2.7c.736.105 1.457.29 2.153.55.654.3 1.273.671 1.846 1.107a2.458 2.458 0 003.94 0 9.71 9.71 0 011.846-1.107 10.213 10.213 0 012.153-.55 2.368 2.368 0 002.7-2.7 10.2 10.2 0 01.55-2.15 9.57 9.57 0 011.109-1.848 2.457 2.457 0 000-3.939 9.569 9.569 0 01-1.108-1.847 10.222 10.222 0 01-.551-2.152 2.369 2.369 0 00-2.7-2.7 10.213 10.213 0 01-2.151-.55 9.651 9.651 0 01-1.847-1.108 4.173 4.173 0 00-1.97-.988zm-1.1 14.948a1.41 1.41 0 01-.389-.055l-.029-.01a1.377 1.377 0 01-.352-.164l-.024-.017a.978.978 0 01-.093-.068.62.62 0 01-.064-.055l-3.23-2.944a1.414 1.414 0 111.905-2.09l2.232 2.034 4.892-4.89a1.414 1.414 0 012 2l-5.846 5.845-.023.022a1.415 1.415 0 01-.051.047l.074-.069a1.408 1.408 0 01-.476.314l-.054.02a1.104 1.104 0 01-.072.023l-.052.014a1.173 1.173 0 01-.081.018l-.014.003a1.381 1.381 0 01-.251.022h-.001z"
          id={`verified_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`verified_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#verified_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#verified_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
