import React from 'react';
import { NavContainer } from 'silk-react-components'
import { connect } from 'react-redux';
import selectGroupTab from './Actions/SelectGroupTabActionCreator';

const getTabs = (groups) => Object.values(groups).map(group => {
  return {
    text: group.name
   };
});

const GroupTabs = ({groups, selectedGroupTab, selectGroupTab}) =>
  <NavContainer
    selectedTab={selectedGroupTab}
    onTabClicked={selectGroupTab}
    tabs={getTabs(groups)} />

export default connect(
  state => ({
    groups: state.definitions.groups,
    selectedGroupTab: state.selectedGroupTab
  }),
  dispatch => ({
    selectGroupTab: (tabName) => dispatch(selectGroupTab(tabName))
  })
)(GroupTabs)
