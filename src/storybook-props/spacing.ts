import { generateTable } from './generateTable';

type Label = 'margin' | 'padding';
const positions = ['top', 'right', 'left', 'bottom', 'x', 'y'] as const;
type Position = typeof positions[number];

const generateDescription = (label: Label, position: Position) => {
  const LabelFirstLetter = label.charAt(0);
  const PositionFirstLetter = position.charAt(0);
  const targetPosition = position === 'x' ? 'right, left' : position === 'y' ? 'top, bottom' : position;

  return {
    [LabelFirstLetter + PositionFirstLetter]: {
      description: `\`${label} ${targetPosition}\` 을 조절합니다. \`n * 4px\` 으로 적용됩니다.`,
      ...generateTable({ category: label }),
    },
  };
};

export const spacing = (label: Label): unknown => {
  return positions.reduce((acc, curr) => Object.assign(acc, generateDescription(label, curr)), {});
};
