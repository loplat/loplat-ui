const spinner = (label: 'circle' | 'cube'): unknown => {
  return {
    duration: {
      description: `\`${label} spinner\`가 한바퀴를 도는데 걸리는 시간을 조절합니다. 숫자가 작아질수록 빠르게, 커질수록 느리게 돌아갑니다.`,
    },
    scale: {
      description: `\`${label} spinner\`의 크기를 조절합니다.`,
    },
    zIndex: {
      description: 'css의 z-index를 결정합니다.',
    },
  };
};

export default spinner;
