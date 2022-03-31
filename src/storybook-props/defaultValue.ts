const defaultValue = (value: unknown) => ({
  defaultValue: value,
  table: { defaultValue: { summary: value } },
});

export default defaultValue;
