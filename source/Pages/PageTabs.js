import React from 'react';
import { NavContainer } from 'silk-react-components'
import { connect } from 'react-redux';
import selectPageTab from './Actions/SelectPageTabActionCreator';

const getTabs = (pages) => Object.values(pages).map(page => {
  return {
    text: page.name
   };
});

const PageTabs = ({pages, selectedPageTab, selectPageTab}) =>
  <NavContainer
    selectedTab={selectedPageTab}
    onTabClicked={selectPageTab}
    tabs={getTabs(pages)} />

export default connect(
  state => ({
    pages: state.definitions.pages,
    selectedPageTab: state.selectedPageTab
  }),
  dispatch => ({
    selectPageTab: (tabName) => dispatch(selectPageTab(tabName))
  })
)(PageTabs)
