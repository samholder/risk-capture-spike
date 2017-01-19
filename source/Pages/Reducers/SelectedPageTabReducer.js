const selectedPageTab = (state = 'Proposer', action) => {
  switch (action.type) {
    case 'PAGE_TAB_SELECTED':
      return action.tab;
    default:
        return state;
  }
}

export default selectedPageTab;
