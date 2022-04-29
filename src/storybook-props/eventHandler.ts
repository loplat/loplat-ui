const events = ['onClick', 'onChange', 'onBlur', 'onKeyPress', 'onFocus'] as const;

export const eventHandler = events.reduce(
  (acc, curr) => Object.assign(acc, { [curr]: { table: { category: 'event handler' } } }),
  {},
);
