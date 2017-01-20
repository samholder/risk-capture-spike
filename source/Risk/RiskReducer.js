const risk = (state = [], action) => {
  switch (action.type) {
    case 'FIELD_UPDATED':
      const riskItem = {
        riskItemId : action.riskItemId,
        value: action.fieldValue
      };

      const index = state.findIndex(item => item.riskItemId == action.riskItemId);

      if(index == -1) {
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
}

export default risk;
