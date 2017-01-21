const definition = (state = [], action) => {
  switch (action.type) {
    case 'DEFINITION_SET':
      return action.definition;
    default:
        return state;
  }
};

export default definition;
