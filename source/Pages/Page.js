import React from 'react';
import { Grid, GridRow } from 'silk-react-components';
import GroupContainer from '../Groups/GroupContainer';

const renderGroup = (groupId) =>
  <GroupContainer id={groupId}/>;

const renderGroupsRow = (layoutRow) =>
  <GridRow>{layoutRow.map(groupId => renderGroup(groupId))}</GridRow>;

const renderPage = (page) =>
  page.groupLayout.map(layoutRow => renderGroupsRow(layoutRow));

const Page = ({page}) => <Grid>{renderPage(page)}</Grid>;

export default Page;
