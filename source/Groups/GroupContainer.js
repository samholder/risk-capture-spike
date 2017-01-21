import React from 'react';
import { connect } from 'react-redux';
import { GridBox, GridRow, Table } from 'silk-react-components';
import Form from '../Fields/Form';
import GroupSelectorIconsContainer from './GroupSelectorIconsContainer';

const renderStandardGroup = (group) =>
  <GridBox
    className="space-right-large"
    title={group.name}>
    <Form group={group} />
  </GridBox>

const renderRepeatingGroup = (group, headers) =>
  <GridBox
    buttons={<GroupSelectorIconsContainer />}
    noBody
    title={group.name}>
    <Table
      columnConfig={group.headers.map(headerId => { return { headerLabel: headers[headerId].name } })} />
  </GridBox>


const GroupContainer = ({groups, group, headers}) => {
  if(group.headers.length == 0) {
    return renderStandardGroup(group);
  }
  else {
    return renderRepeatingGroup(group, headers);
  }
}

export default connect(
  (state, props) => ({
    group: state.definitions.groups[props.id],
    fields: state.definitions.fields,
    headers: state.definitions.headers
  }),
  dispatch => ({
  })
)(GroupContainer)
