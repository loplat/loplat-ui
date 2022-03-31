const disabled = (tag: string, category?: string) => ({
  disabled: {
    description: `\`${tag}\` 태그의 \`disabled\` 속성입니다.`,
    table: { category },
    type: 'boolean',
  },
});

export default disabled;
