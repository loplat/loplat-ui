import * as React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { Toast } from '../core/types';
import { LoaderIcon } from './loader';
import { CheckcircleFillIcon } from '../../../assets/Icon';
import { generateColorSet } from '../core/utils';

const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const IndicatorWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`;

const enter = keyframes`
  from {
    transform: scale(0.6);
    opacity: 0.4;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }`;

export const AnimatedIconWrapper = styled.div`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${enter} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
`;

export const ToastIcon: React.FC<{
  toast: Toast;
}> = ({ toast }) => {
  const { icon, type, iconTheme } = toast;
  const { iconColor } = generateColorSet(type);
  if (icon !== undefined) {
    if (typeof icon === 'string') {
      return <AnimatedIconWrapper>{icon}</AnimatedIconWrapper>;
    } else {
      return icon;
    }
  }
  return (
    <IndicatorWrapper>
      {type === 'loading' && <LoaderIcon {...iconTheme} />}
      {type !== 'loading' && (
        <StatusWrapper>
          <CheckcircleFillIcon size={28} fillColor={iconColor} />
        </StatusWrapper>
      )}
    </IndicatorWrapper>
  );
};
