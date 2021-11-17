import React from 'react';
import styled from '@emotion/styled';
import Circle from './images/circle.png';
import Cube from './images/cube.png';

export interface SpinnerProps {
  duration?: number;
  scale?: number;
  zIndex?: number;
}

export const CubeSpinner = ({ duration = 1000, scale = 1, zIndex = 0 }: SpinnerProps): React.ReactElement => {
  const steps = 28;
  return (
    <Wrapper width={3248} height={132} steps={steps} scale={scale} zIndex={zIndex}>
      <SpriteImage src={Cube} alt="" duration={duration} steps={steps} />
    </Wrapper>
  );
};

export const CircleSpinner = ({ duration = 1000, scale = 1, zIndex = 0 }: SpinnerProps): React.ReactElement => {
  const steps = 30;
  return (
    <Wrapper width={3480} height={132} steps={steps} scale={scale} zIndex={zIndex}>
      <SpriteImage src={Circle} alt="" duration={duration} steps={steps} />
    </Wrapper>
  );
};

interface WrapperProps {
  width: number;
  height: number;
  steps: number;
  scale: number;
  zIndex: number;
}

const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => `calc(${props.width}px / ${props.steps})`};
  height: ${({ height }) => height}px;
  overflow: hidden;
  transform: scale(${({ scale }) => scale});
  z-index: ${({ zIndex }) => zIndex};
`;

interface ImageProps {
  duration: number;
  steps: number;
}

const SpriteImage = styled.img<ImageProps>`
  animation: ${(props) => `play ${props.duration}ms steps(${props.steps}) infinite`};

  @keyframes play {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
