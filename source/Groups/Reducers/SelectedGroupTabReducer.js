const selectedGroupTab = (state = 'Proposer', action) => {
  switch (action.type) {
    case 'GROUP_TAB_SELECTED':
      return action.tab;
    default:
        return state;
  }
}

export default selectedGroupTab;
