import React from 'react';
import { Grid, GridRow } from 'silk-react-components'
import Group from '../Groups/Group';

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

const Page = ({page}) => <Grid>{renderPage(page)}</Grid>

export default Page;
