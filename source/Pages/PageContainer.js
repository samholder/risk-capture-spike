import React from 'react';
import { connect } from 'react-redux';
import { Grid, GridRow } from 'silk-react-components';
import StandardGroupContainer from '../Groups/StandardGroupContainer';
import RepeatingGroupContainer from '../Groups/Repeating/RepeatingGroupContainer';

const renderGroup = (group) => {
  if (group.columns.length === 0) {
    return (<StandardGroupContainer groupId={group.id} />);
  } else {
    return (<RepeatingGroupContainer groupId={group.id} />);
  }
};

const renderGroupsRow = (layoutRow, groups) =>
  <GridRow>{layoutRow.map(groupId => renderGroup(groups[groupId]))}</GridRow>;

const renderPage = (page, groups) =>
  page.groupLayout.map(layoutRow => renderGroupsRow(layoutRow, groups));

const PageContainer = ({page, groups}) => <Grid>{renderPage(page, groups)}</Grid>;

export default connect(state => ({ groups: state.definition.groups }))(PageContainer);
