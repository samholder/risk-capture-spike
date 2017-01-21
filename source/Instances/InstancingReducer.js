const applyInstance = (instances, groupId, instanceId, parentInstanceId) => {
  return {
    ...instances,
    [groupId]: {
      groupId: groupId,
      parentInstanceId: parentInstanceId,
      currentInstance: instanceId
    }
  };
};

const applyGroupInstance = (instances, groupId, instanceId, parentInstanceId) => {
  let availableInstances = [];

  if (groupId in instances) {
    availableInstances = [...instances[groupId].availableInstances, instanceId];
  }

  return {
    ...instances,
    [groupId]: {
      groupId: groupId,
      parentInstanceId: parentInstanceId,
      currentInstance: instanceId,
      availableInstances: availableInstances
    }
  };
};

const applyInstances = (instancing, instances) => {
  return {
    instanceId: instancing.instanceId + 1,
    instances: instances
  };
};

const instancing = (state = { instanceId: 1, instances: {} }, action) => {
  let instances = state.instances;
  switch (action.type) {
    case 'DEFINITION_SET':
      Object.values(action.definition.pages).forEach(page => {
        page.groups.forEach(groupId => {
          let group = action.definition.groups[groupId];
          if (group.columns.length === 0) {
            instances = applyInstance(instances, groupId, state.instanceId, 0);
          } else {
            instances = applyGroupInstance(instances, groupId, 0, state.instanceId);
          }
        });
      });
      return applyInstances(state, instances);

    case 'REPEATING_GROUP_ITEM_ADD_REQUESTED':
      instances = applyGroupInstance(
        instances,
        action.groupId,
        state.instanceId,
        action.parentInstanceId);

      action.subGroups.forEach(groupId => {
        instances = applyInstance(
          instances,
          groupId,
          state.instanceId,
          action.parentInstanceId);
      });
      return applyInstances(state, instances);

    default:
      return state;
  }
};

export default instancing;
