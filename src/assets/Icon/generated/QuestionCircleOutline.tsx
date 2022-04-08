import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const QuestionCircleOutline = React.memo<IconProps>(
  ({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
            d="M25.888 6.288a14.132 14.132 0 01-1.766 17.842 14.1 14.1 0 01-10 4.135A14.132 14.132 0 1125.888 6.288zm-11.766-3.46a11.306 11.306 0 10.02 22.611 11.306 11.306 0 00-.02-22.612zm-.568 14.446c1.098 0 1.908.882 1.908 1.98 0 1.116-.81 1.998-1.908 1.998-1.116 0-1.908-.882-1.908-1.998 0-1.098.792-1.98 1.908-1.98zm.27-10.314c2.232 0 3.978 1.062 3.978 3.564 0 1.112-.608 1.876-1.263 2.59l-.329.353c-.71.765-1.365 1.529-1.252 2.673h-2.79c-.432-2.772 2.556-3.924 2.556-5.4 0-.792-.558-1.206-1.296-1.206s-1.26.378-1.818.936L9.846 8.85c.99-1.134 2.358-1.89 3.978-1.89z"
            id={`question_circle_outline_svg__a__${uniqueId}`}
          />
        </defs>
        <g transform="translate(2 2)" fill="none" fillRule="evenodd">
          <mask id={`question_circle_outline_svg__b__${uniqueId}`} fill="#fff">
            <use xlinkHref={`#question_circle_outline_svg__a__${uniqueId}`} />
          </mask>
          <g mask={`url(#question_circle_outline_svg__b__${uniqueId})`}>
            <path fill={fillColor} d="M-2-2h32v32H-2z" />
          </g>
        </g>
      </Svg>
    );
  },
);
