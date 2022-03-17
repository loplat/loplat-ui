const events = ['onClick', 'onChange', 'onBlur', 'onKeyPress', 'onFocus'] as const;

const eventHandler = events.reduce(
  (acc, curr) => Object.assign(acc, { [curr]: { table: { category: 'event handler' } } }),
  {},
);

export default eventHandler;
