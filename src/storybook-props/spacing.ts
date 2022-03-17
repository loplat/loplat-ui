type Label = 'margin' | 'padding';
const positions = ['top', 'right', 'left', 'bottom', 'x', 'y'] as const;
type Position = typeof positions[number];

const buildObject = (label: Label, position: Position) => {
  const LabelFirstLetter = label.charAt(0);
  const PositionFirstLetter = position.charAt(0);
  const targetPosition = position === 'x' ? 'right, left' : position === 'y' ? 'top, bottom' : position;

  return {
    [LabelFirstLetter + PositionFirstLetter]: {
      description: `\`${label} ${targetPosition}\` 을 조절합니다.`,
      table: { category: label },
    },
  };
};

const spacing = (label: Label): unknown => {
  return positions.reduce((acc, curr) => Object.assign(acc, buildObject(label, curr)), {});
};

export default spacing;
