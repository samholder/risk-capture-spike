const repeatingGroupItemSelected = (groupId, selectedInstanceId, parentInstanceId, subGroups) => {
  return {
      type: 'REPEATING_GROUP_ITEM_SELECTED',
      groupId: groupId,
      selectedInstanceId: selectedInstanceId,
      parentInstanceId: parentInstanceId,
      subGroups: subGroups
  };
};

const selectRepeatingGroupItem = (instance, selectedInstanceId) =>
  (dispatch, getState) => {
    dispatch(repeatingGroupItemSelected(
      instance.groupId,
      selectedInstanceId,
      instance.parentInstanceId,
      getState().definition.groups[instance.groupId].subGroups));
  };

export default selectRepeatingGroupItem;
