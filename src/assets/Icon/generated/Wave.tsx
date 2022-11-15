import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Wave = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M24.339 15.289h.011a.914.914 0 00-.921.855v2.466a3.363 3.363 0 01-3.36 3.359 3.363 3.363 0 01-3.359-3.359v-4.735l.003-.079.001-10.436a.532.532 0 10-1.064 0v10.516l-.005.09.001 8.492a3.363 3.363 0 01-3.36 3.359 3.363 3.363 0 01-3.36-3.359v-8.565V8.35a.532.532 0 10-1.064 0v3.32a3.625 3.625 0 01-3.621 3.621H1.414a1.414 1.414 0 010-2.828h2.827a.794.794 0 00.794-.793v-3.32a3.36 3.36 0 116.719 0v14.109a.532.532 0 101.064 0v-8.582l.003-.069.001-10.447a3.36 3.36 0 116.72 0v10.516l-.005.09.001 4.644a.532.532 0 001.063 0v-2.466a3.721 3.721 0 013.749-3.683l2.513.001a1.414 1.414 0 010 2.828l-2.524-.001z"
          id={`wave_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 3)" fill="none" fillRule="evenodd">
        <mask id={`wave_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#wave_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#wave_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-3h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
