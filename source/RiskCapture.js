import React from 'react';
import { connect } from 'react-redux';
import { Theme, Stage, Grid, GridRow } from 'silk-react-components'
import PageTabs from './Pages/PageTabs';
import Group from './Groups/Group';

const renderGroupsRow = (page, groupStartIndex, groupsInRow) => {
  var groups = [];

  for (var i = 0; i < groupsInRow; i++) {
    var groupId = page.groups[groupStartIndex + i];
    groups.push(<Group id={groupId}/>);
  }

  return <GridRow>{groups}</GridRow>;
}

const renderPage = (page) => {
  var rows = [];
  var groupStartIndex = 0;

  page.groupsByRow.forEach(groupsInRow => {
    rows.push(renderGroupsRow(page, groupStartIndex, groupsInRow));
    groupStartIndex += groupsInRow;
  });

  return rows;
}

const RiskCapture = ({page}) =>
  <div>
    <Theme name="dark"/>
    <Stage>
      <PageTabs/>
      <Grid>
          {renderPage(page)}
      </Grid>
    </Stage>
  </div>

export default connect(
  state => ({
    page : state.selectedPageTab !== ''
      ? state.definitions.pages[state.selectedPageTab]
      : state.definitions.pages[0]
    }),
  dispatch => ({
  })
)(RiskCapture)
