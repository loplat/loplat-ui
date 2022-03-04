const spacing = (label: 'margin' | 'padding'): unknown => {
  const firstLetter = label.charAt(0);

  return {
    [firstLetter + 't']: {
      description: `\`${label} top\`을 조절합니다.`,
      table: {
        category: `${label}`,
      },
    },
    [firstLetter + 'r']: {
      description: `\`${label} right\`을 조절합니다.`,
      table: {
        category: `${label}`,
      },
    },
    [firstLetter + 'l']: {
      description: `\`${label} left\`을 조절합니다.`,
      table: {
        category: `${label}`,
      },
    },
    [firstLetter + 'b']: {
      description: `\`${label} bottom\`을 조절합니다.`,
      table: {
        category: `${label}`,
      },
    },
    [firstLetter + 'x']: {
      description: `\`${label} right, left\`을 조절합니다.`,
      table: {
        category: `${label}`,
      },
    },
    [firstLetter + 'y']: {
      description: `\`${label} top, bottom\`를 조절합니다.`,
      table: {
        category: `${label}`,
      },
    },
  };
};

export default spacing;
