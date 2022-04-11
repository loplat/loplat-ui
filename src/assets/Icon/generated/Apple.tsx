import React from 'react';
import { IconProps } from '../index';
import { marginSpacingProps } from '../../../core/Spacing';
import Svg from '../../svg';
export const Apple = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, ...props }) => {
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
          d="M15.135.479c0 1.198-.438 2.317-1.31 3.353-1.053 1.231-2.327 1.942-3.708 1.83a3.653 3.653 0 01-.028-.454c0-1.151.501-2.382 1.39-3.388.444-.51 1.009-.934 1.693-1.272.684-.333 1.33-.517 1.938-.548.018.16.025.32.025.479zm4.623 18.192a12.988 12.988 0 01-1.288 2.316c-.677.966-1.232 1.634-1.659 2.005-.663.61-1.373.922-2.133.94-.546 0-1.204-.156-1.97-.471-.768-.313-1.475-.469-2.121-.469-.677 0-1.403.156-2.18.469-.779.315-1.406.479-1.885.496-.729.031-1.455-.29-2.181-.965-.463-.403-1.042-1.095-1.735-2.076-.744-1.047-1.356-2.261-1.835-3.645C.257 15.775 0 14.327 0 12.926c0-1.606.347-2.991 1.042-4.151a6.1 6.1 0 012.182-2.207 5.872 5.872 0 012.95-.833c.579 0 1.338.179 2.282.531.941.353 1.545.532 1.81.532.198 0 .869-.209 2.007-.627 1.075-.387 1.984-.547 2.727-.484 2.016.163 3.531.957 4.538 2.389-1.803 1.092-2.695 2.622-2.677 4.585.016 1.529.571 2.801 1.661 3.811a5.443 5.443 0 001.659 1.088c-.133.386-.274.756-.423 1.111z"
          id={`apple_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(6 4)" fill="none" fillRule="evenodd">
        <mask id={`apple_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#apple_svg__a__${uniqueId}`} />
        </mask>
        <use fill="#B3B3B3" xlinkHref={`#apple_svg__a__${uniqueId}`} />
        <g mask={`url(#apple_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-6-4h32v32H-6z" />
        </g>
      </g>
    </Svg>
  );
});
