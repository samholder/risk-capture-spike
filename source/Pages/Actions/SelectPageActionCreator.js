const selectPage = (tab) => {
  return {
      type: 'PAGE_SELECTED',
      tab: tab
  };
};

export default selectPage;
