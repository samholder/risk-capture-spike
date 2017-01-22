const repeatingGroupItemAddRequested = (groupId, parentInstanceId, subGroups, subRepeatingGroups) => {
  return {
      type: 'REPEATING_GROUP_ITEM_ADD_REQUESTED',
      groupId: groupId,
      parentInstanceId: parentInstanceId,
      subGroups: subGroups,
      subRepeatingGroups: subRepeatingGroups
  };
};

const addRepeatingGroupItem = (instance) =>
  (dispatch, getState) => {
    const group = getState().definition.groups[instance.groupId];

    dispatch(repeatingGroupItemAddRequested(
      instance.groupId,
      instance.parentInstanceId,
      group.subGroups,
      group.subRepeatingGroups));
  };

export default addRepeatingGroupItem;
