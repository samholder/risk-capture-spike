const selectedPage = (state = 'Proposer', action) => {
  switch (action.type) {
    case 'PAGE_SELECTED':
      return action.tab;
    default:
        return state;
  }
};

export default selectedPage;
