import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const QuestionCircleFill = React.memo<IconProps>(
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
            d="M25.888 6.288a14.132 14.132 0 01-1.766 17.842 14.1 14.1 0 01-10 4.135A14.132 14.132 0 1125.888 6.288zM13.554 17.274c-1.116 0-1.908.882-1.908 1.98 0 1.116.792 1.998 1.908 1.998 1.098 0 1.908-.882 1.908-1.998 0-1.098-.81-1.98-1.908-1.98zm.27-10.314c-1.62 0-2.988.756-3.978 1.89l1.764 1.62c.558-.558 1.08-.936 1.818-.936s1.296.414 1.296 1.206c0 1.476-2.988 2.628-2.556 5.4h2.79c-.113-1.144.542-1.908 1.252-2.673l.329-.354c.655-.713 1.263-1.477 1.263-2.589 0-2.502-1.746-3.564-3.978-3.564z"
            id={`question_circle_fill_svg__a__${uniqueId}`}
          />
        </defs>
        <g transform="translate(2 2)" fill="none" fillRule="evenodd">
          <mask id={`question_circle_fill_svg__b__${uniqueId}`} fill="#fff">
            <use xlinkHref={`#question_circle_fill_svg__a__${uniqueId}`} />
          </mask>
          <g mask={`url(#question_circle_fill_svg__b__${uniqueId})`}>
            <path fill={fillColor} d="M-2-2h32v32H-2z" />
          </g>
        </g>
      </Svg>
    );
  },
);
