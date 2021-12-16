import React from 'react';
import type { IconProps } from '../index';
export const DoubleCheveronUp =
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
            d="M26.156 15.193a1.41 1.41 0 01-1-.414L13.786 3.4 2.413 14.778a1.414 1.414 0 11-2-2L12.785.397a1.457 1.457 0 012 0L27.157 12.78a1.414 1.414 0 01-1 2.413v.001z"
            id={`double_cheveron_up_svg__a__${uniqueId}`}
          />
          <path
            d="M26.156 15.193a1.41 1.41 0 01-1-.414L13.786 3.4 2.413 14.778a1.414 1.414 0 11-2-2L12.785.397a1.457 1.457 0 012 0L27.157 12.78a1.414 1.414 0 01-1 2.413v.001z"
            id={`double_cheveron_up_svg__c__${uniqueId}`}
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(2 3)">
            <mask id={`double_cheveron_up_svg__b__${uniqueId}`} fill="#fff">
              <use xlinkHref={`#double_cheveron_up_svg__a__${uniqueId}`} />
            </mask>
            <g mask={`url(#double_cheveron_up_svg__b__${uniqueId})`}>
              <path fill={fillColor} d="M-2-8h32v32H-2z" />
            </g>
          </g>
          <g transform="translate(2 13)">
            <mask id={`double_cheveron_up_svg__d__${uniqueId}`} fill="#fff">
              <use xlinkHref={`#double_cheveron_up_svg__c__${uniqueId}`} />
            </mask>
            <g mask={`url(#double_cheveron_up_svg__d__${uniqueId})`}>
              <path fill={fillColor} d="M-2-8h32v32H-2z" />
            </g>
          </g>
        </g>
      </svg>
    );
  });
