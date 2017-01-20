const setPolicyDefinitions = (definitions) => {
  return {
      type: 'DEFINITIONS_DEFINED',
      definitions: definitions
  }
};

export default setPolicyDefinitions;
