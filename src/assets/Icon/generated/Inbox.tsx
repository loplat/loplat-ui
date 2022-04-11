import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Inbox = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M1.414 13.304a1.43 1.43 0 01-.147-.008l.147.008a1.415 1.415 0 01-.292-.03l-.048-.011a1.22 1.22 0 01-.092-.026l-.043-.015a1.21 1.21 0 01-.096-.038l-.039-.018a1.24 1.24 0 01-.095-.05l-.031-.019a1.281 1.281 0 01-.27-.214 1.366 1.366 0 01-.147-.175l-.017-.024-.01-.016A1.406 1.406 0 010 11.89v-.045l.003-.049L0 11.89c0-.07.005-.14.015-.207l.005-.028c.006-.04.014-.079.024-.117l.009-.03c.016-.058.035-.115.059-.17L4.263.892A1.414 1.414 0 015.577 0h17.83c.58 0 1.1.353 1.314.892l4.16 10.465c.02.05.036.1.05.15l-.047-.139a1.415 1.415 0 01.08.287l.005.028a1.297 1.297 0 01.015.207v8.794a4.247 4.247 0 01-4.242 4.241h-20.5A4.247 4.247 0 010 20.684v-4.395a1.414 1.414 0 012.828 0v4.395c.001.78.634 1.413 1.414 1.414h20.5a1.416 1.416 0 001.414-1.414v-7.38h-5.53a6.608 6.608 0 01-5.875 4.075l-.259.004a6.608 6.608 0 01-6.093-3.981l-.041-.098H1.414zm7.973-2.828c.66 0 1.232.456 1.379 1.1a3.82 3.82 0 007.451 0c.147-.644.72-1.1 1.38-1.1h5.89l-3.039-7.648H6.536l-3.039 7.648h5.89z"
          id={`inbox_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id={`inbox_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#inbox_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#inbox_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-2-4h32v32H-2z" />
        </g>
      </g>
    </Svg>
  );
});
