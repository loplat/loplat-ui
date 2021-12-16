import React from 'react';
import type { IconProps } from '../index';
export const DoubleCheveronLeft =
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
            d="M13.795 27.57a1.408 1.408 0 01-1-.414L.413 14.786a1.416 1.416 0 010-2L12.795.413a1.414 1.414 0 012 2l-11.38 11.37 11.38 11.371a1.413 1.413 0 01-1 2.414z"
            id={`double_cheveron_left_svg__a__${uniqueId}`}
          />
          <path
            d="M13.795 27.57a1.408 1.408 0 01-1-.414L.413 14.786a1.416 1.416 0 010-2L12.795.413a1.414 1.414 0 012 2l-11.38 11.37 11.38 11.371a1.413 1.413 0 01-1 2.414z"
            id={`double_cheveron_left_svg__c__${uniqueId}`}
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(13 2)">
            <mask id={`double_cheveron_left_svg__b__${uniqueId}`} fill="#fff">
              <use xlinkHref={`#double_cheveron_left_svg__a__${uniqueId}`} />
            </mask>
            <g mask={`url(#double_cheveron_left_svg__b__${uniqueId})`}>
              <path fill={fillColor} d="M-8-2h32v32H-8z" />
            </g>
          </g>
          <g transform="translate(3 2)">
            <mask id={`double_cheveron_left_svg__d__${uniqueId}`} fill="#fff">
              <use xlinkHref={`#double_cheveron_left_svg__c__${uniqueId}`} />
            </mask>
            <g mask={`url(#double_cheveron_left_svg__d__${uniqueId})`}>
              <path fill={fillColor} d="M-8-2h32v32H-8z" />
            </g>
          </g>
        </g>
      </svg>
    );
  });
