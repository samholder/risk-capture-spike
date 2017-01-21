const repeatingGroupItemAddRequested = (groupId, parentInstanceId, subGroups) => {
  return {
      type: 'REPEATING_GROUP_ITEM_ADD_REQUESTED',
      groupId: groupId,
      parentInstanceId: parentInstanceId,
      subGroups: subGroups
  };
};

const addRepeatingGroupItem = (instance) =>
  (dispatch, getState) => {
    dispatch(repeatingGroupItemAddRequested(
      instance.groupId,
      instance.parentInstanceId,
      getState().definition.groups[instance.groupId].subGroups));
  };

export default addRepeatingGroupItem;
