const definitions = (state = [], action) => {
  switch (action.type) {
    case 'DEFINITIONS_DEFINED':
      return action.definitions
    default:
        return state;
  }
}

export default definitions;
