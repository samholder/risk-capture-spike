const applyNewInstance = (instances, groupId, instanceId, parentInstanceId) => {
  return {
    ...instances,
    [groupId]: {
      groupId: groupId,
      parentInstanceId: parentInstanceId,
      currentInstanceId: instanceId
    }
  };
};

const applyNewRepeatingGroupInstance = (instances, groupId, instanceId, parentInstanceId) => {
  let availableInstances = [];

  if (groupId in instances) {
    availableInstances = [...instances[groupId].availableInstances, instanceId];
  }

  return {
    ...instances,
    [groupId]: {
      groupId: groupId,
      parentInstanceId: parentInstanceId,
      currentInstanceId: instanceId,
      availableInstances: availableInstances
    }
  };
};

const applyNewChildRepeatingGroupInstance = (instances, groupId, instanceId, parentInstanceId) => {
  let availableInstances = [];

  if (groupId in instances) {
    availableInstances = [...instances[groupId].availableInstances];
  }

  return {
    ...instances,
    [groupId]: {
      groupId: groupId,
      parentInstanceId: parentInstanceId,
      currentInstanceId: instanceId,
      availableInstances: availableInstances
    }
  };
};

const changeCurrentInstanceId = (instances, groupId, newCurrentInstanceId) => {
  return {
    ...instances,
    [groupId]: {
      ...instances[groupId],
      currentInstanceId: newCurrentInstanceId
    }
  };
};

const changeRepeatingGroupParentInstanceId = (instances, groupId, newParentInstanceId) => {
  return {
    ...instances,
    [groupId]: {
      ...instances[groupId],
      parentInstanceId: newParentInstanceId,
      currentInstanceId: 0,
    }
  };
};

const applyNewInstances = (instancing, instances) => {
  return {
    instanceId: instancing.instanceId + 1,
    instances: instances
  };
};

const applyInstances = (instancing, instances) => {
  return {
    instanceId: instancing.instanceId,
    instances: instances
  };
};

const instancing = (state = { instanceId: 1, instances: {} }, action) => {
  let instances = state.instances;
  switch (action.type) {
    case 'DEFINITION_SET':
      Object.values(action.definition.pages).forEach(page => {
        page.groups.forEach(groupId => {
            instances = applyNewInstance(instances, groupId, state.instanceId, 0);
        });
        page.repeatingGroups.forEach(groupId => {
            instances = applyNewRepeatingGroupInstance(instances, groupId, 0, state.instanceId);
        });
      });
      return applyNewInstances(state, instances);

    case 'REPEATING_GROUP_ITEM_ADD_REQUESTED':
      instances = applyNewRepeatingGroupInstance(
        instances,
        action.groupId,
        state.instanceId,
        action.parentInstanceId);

      action.subGroups.forEach(groupId => {
        instances = applyNewInstance(
          instances,
          groupId,
          state.instanceId,
          action.parentInstanceId);
      });

      action.subRepeatingGroups.forEach(groupId => {
        instances = applyNewChildRepeatingGroupInstance(
          instances,
          groupId,
          0,
          state.instanceId);
      });

      return applyNewInstances(state, instances);

      case 'REPEATING_GROUP_ITEM_SELECTED':
        instances = changeCurrentInstanceId(instances, action.groupId, action.selectedInstanceId);

        action.subGroups.forEach(groupId => {
          instances = changeCurrentInstanceId(instances, groupId, action.selectedInstanceId);
        });

        action.subRepeatingGroups.forEach(groupId => {
          instances = changeRepeatingGroupParentInstanceId(instances, groupId, action.selectedInstanceId);
        });

        return applyInstances(state, instances);

    default:
      return state;
  }
};

export default instancing;
