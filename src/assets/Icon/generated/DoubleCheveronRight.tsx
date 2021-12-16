import React from 'react';
import type { IconProps } from '../index';
export const DoubleCheveronRight =
  React.memo <
  IconProps >
  (({ size = 18, fillColor = '#9DAAB7', suffixForId, className, style }) => {
    const uniqueId = suffixForId ?? String(Math.random().toString(36).slice(2, 11));
    return (
      <svg
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={style}
        className={className}
        viewBox="0 0 32 32"
      >
        <defs>
          <path
            d="M1.417 27.572a1.413 1.413 0 01-.986-2.427l11.682-11.358L.431 2.43A1.414 1.414 0 112.403.403l12.724 12.371a1.414 1.414 0 010 2.027L2.403 27.172c-.264.258-.618.401-.986.4z"
            id={`double_cheveron_right_svg__a__${uniqueId}`}
          />
          <path
            d="M1.417 27.572a1.413 1.413 0 01-.986-2.427l11.682-11.358L.431 2.43A1.414 1.414 0 112.403.403l12.724 12.371a1.414 1.414 0 010 2.027L2.403 27.172c-.264.258-.618.401-.986.4z"
            id={`double_cheveron_right_svg__c__${uniqueId}`}
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(3 2)">
            <mask id={`double_cheveron_right_svg__b__${uniqueId}`} fill="#fff">
              <use xlinkHref={`#double_cheveron_right_svg__a__${uniqueId}`} />
            </mask>
            <g mask={`url(#double_cheveron_right_svg__b__${uniqueId})`}>
              <path fill={fillColor} d="M-8-2h32v32H-8z" />
            </g>
          </g>
          <g transform="translate(13 2)">
            <mask id={`double_cheveron_right_svg__d__${uniqueId}`} fill="#fff">
              <use xlinkHref={`#double_cheveron_right_svg__c__${uniqueId}`} />
            </mask>
            <g mask={`url(#double_cheveron_right_svg__d__${uniqueId})`}>
              <path fill={fillColor} d="M-8-2h32v32H-8z" />
            </g>
          </g>
        </g>
      </svg>
    );
  });
