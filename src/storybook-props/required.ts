const required = (type?: string) => {
  const otherOption = type ? { summary: type } : {};
  return {
    type: {
      required: 'true',
      ...otherOption,
    },
  };
};
export default required;
