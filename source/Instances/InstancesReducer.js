const instances = (state = {}, action) => {
  switch (action.type) {
    case 'DEFINITION_SET':
      let output = {};
      Object.values(action.definition.pages).forEach(page => {
        page.groups.forEach(groupId => {
          output[groupId] = {
            groupId: groupId,
            parentInstance: 0,
            currentInstance: 1
          };
        });
      });
      return output;
    default:
      return state;
  }
};

export default instances;
