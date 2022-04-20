import React from 'react';
import styled from '@emotion/styled';
import Cube from './images/cube.png';
import CubeWebp from './images/cube.webp';
import Circle from './images/circle.png';
import CircleWebp from './images/circle.webp';

export type SpinnerProps = {
  /** 스피너 컴포넌트가 한바퀴를 도는데 걸리는 시간을 조절합니다. 숫자가 작아질수록 빠르게, 커질수록 느리게 돌아갑니다. */
  duration?: number;
  /** 컴포넌트의 크기를 조절합니다. */
  scale?: number;
  /** css의 z-index를 결정합니다. */
  zIndex?: number;
};

type Spinner = SpinnerProps & React.AriaAttributes;

export const CubeSpinner = ({ duration = 1000, scale = 1, zIndex = 0, ...props }: Spinner): React.ReactElement => {
  const steps = 28;
  return (
    <Wrapper width={3248} height={132} steps={steps} scale={scale} zIndex={zIndex} role="progressbar" {...props}>
      <picture>
        <source srcSet={CubeWebp} type="image/webp" />
        <SpriteImage src={Cube} alt="" duration={duration} steps={steps} />
      </picture>
    </Wrapper>
  );
};

export const CircleSpinner = ({ duration = 1000, scale = 1, zIndex = 0, ...props }: Spinner): React.ReactElement => {
  const steps = 30;
  return (
    <Wrapper width={3480} height={132} steps={steps} scale={scale} zIndex={zIndex} role="progressbar" {...props}>
      <picture>
        <source srcSet={CircleWebp} type="image/webp" />
        <SpriteImage src={Circle} alt="" duration={duration} steps={steps} />
      </picture>
    </Wrapper>
  );
};

type WrapperProps = {
  width: number;
  height: number;
  steps: number;
} & Omit<Required<SpinnerProps>, 'duration'>;

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
