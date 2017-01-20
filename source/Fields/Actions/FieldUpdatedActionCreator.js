const fieldUpdated = (riskItemId, fieldValue) => {
  return {
      type: 'FIELD_UPDATED',
      riskItemId: riskItemId,
      fieldValue: fieldValue
  }
}
export default fieldUpdated;
