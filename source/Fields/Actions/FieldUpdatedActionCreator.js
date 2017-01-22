const fieldUpdated = (riskItem, instanceId, parentInstanceId, fieldValue) => {
  return {
      type: 'FIELD_UPDATED',
      riskItemId: riskItem,
      instanceId: instanceId,
      parentInstanceId: parentInstanceId,
      fieldValue: fieldValue
  }
}
export default fieldUpdated;
