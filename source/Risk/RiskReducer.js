const risk = (state = [], action) => {
  switch (action.type) {
    case 'FIELD_UPDATED':
      const riskItem = {
        riskItem: action.riskItemId,
        instanceId: action.instanceId,
        parentInstanceId: action.parentInstanceId,
        value: action.fieldValue
      };

      const index = state.findIndex(item =>
        item.riskItem === action.riskItem &&
        item.instanceId === action.instanceId);

      if (index === -1) {
        return [...state, riskItem];
      }

      return [
        ...state.slice(0, index),
        riskItem,
        ...state.slice(index + 1)
      ];

    default:
        return state;
  }
};

export default risk;
