import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const VerifiedFill = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M14.133 0c1.353 0 2.65.542 3.6 1.505.405.31.84.578 1.3.8a8.11 8.11 0 001.565.378 4.958 4.958 0 014.986 4.986c.073.533.2 1.057.378 1.565.222.46.49.895.8 1.3a5.057 5.057 0 010 7.2c-.31.405-.578.84-.8 1.3a8.039 8.039 0 00-.378 1.565 4.956 4.956 0 01-4.986 4.985 8 8 0 00-1.564.38c-.46.22-.895.489-1.3.8a6.333 6.333 0 01-3.601 1.505 6.336 6.336 0 01-3.6-1.507 7.525 7.525 0 00-1.3-.8 8.015 8.015 0 00-1.565-.379 4.956 4.956 0 01-4.985-4.985 8.035 8.035 0 00-.378-1.565 7.533 7.533 0 00-.8-1.3 5.059 5.059 0 010-7.2 7.5 7.5 0 00.8-1.3 8.006 8.006 0 00.378-1.564 4.956 4.956 0 014.984-4.985 8.026 8.026 0 001.566-.379c.459-.222.894-.49 1.3-.8A5.058 5.058 0 0114.133 0zm-1.098 17.768c.085 0 .17-.007.252-.022l.012-.003a1.217 1.217 0 00.26-.076 1.062 1.062 0 00.185-.09 2.14 2.14 0 00.157-.105l.03-.024.03-.025.051-.047.023-.022 5.846-5.845a1.414 1.414 0 00-2-2l-4.892 4.89-2.232-2.035a1.414 1.414 0 00-1.236-.34l-.146.038a1.414 1.414 0 00-.523 2.393l3.23 2.944.052.045c.005.002.009.006.013.009.029.025.06.049.092.07l.024.015c.11.073.228.128.353.167l.028.008c.126.036.257.055.39.055z"
          id={`verified-fill_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id={`verified-fill_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#verified-fill_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#verified-fill_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
