const fieldUpdated = (riskItem, fieldValue) => {
  return {
      type: 'FIELD_UPDATED',
      riskItemId: riskItem,
      fieldValue: fieldValue
  }
}
export default fieldUpdated;
