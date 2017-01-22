const repeatingGroupItemSelected = (groupId, selectedInstanceId, parentInstanceId, subGroups, subRepeatingGroups) => {
  return {
      type: 'REPEATING_GROUP_ITEM_SELECTED',
      groupId: groupId,
      selectedInstanceId: selectedInstanceId,
      parentInstanceId: parentInstanceId,
      subGroups: subGroups,
      subRepeatingGroups: subRepeatingGroups
  };
};

const selectRepeatingGroupItem = (instance, selectedInstanceId) =>
  (dispatch, getState) => {
    const group = getState().definition.groups[instance.groupId];

    dispatch(repeatingGroupItemSelected(
      instance.groupId,
      selectedInstanceId,
      instance.parentInstanceId,
      group.subGroups,
      group.subRepeatingGroups));
  };

export default selectRepeatingGroupItem;
