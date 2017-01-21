import React from 'react';
import { NavContainer } from 'silk-react-components';
import { connect } from 'react-redux';
import selectPage from './Actions/SelectPageActionCreator';

const getTabs = (pages) => Object.values(pages).map(page => {
  return {
    text: page.name
   };
});

const PageTabsContainer = ({pages, selectedPage, onSelectPage}) =>
  <NavContainer
    selectedTab={selectedPage}
    onTabClicked={onSelectPage}
    tabs={getTabs(pages)} />;

export default connect(
  state => ({
    pages: state.definition.pages,
    selectedPage: state.selectedPage
  }),
  dispatch => ({
    onSelectPage: (page) => dispatch(selectPage(page))
  })
)(PageTabsContainer);
