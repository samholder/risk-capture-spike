const addRepeatingGroupItem = (instanceId, parentInstanceId) => {
  return {
      type: 'REPEATING_GROUP_ITEM_ADD_REQUESTED',
      instanceId: instanceId,
      parentInstanceId: parentInstanceId
  }
}

export default addRepeatingGroupItem;
