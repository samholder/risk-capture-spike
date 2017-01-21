import React from 'react';
import { connect } from 'react-redux';
import { GridBox, Table } from 'silk-react-components';
import RepeatingGroupButtonsContainer from './RepeatingGroupButtonsContainer';

const RepeatingGroupContainer = ({group, columns}) =>
  <GridBox
    buttons={<RepeatingGroupButtonsContainer groupId={group.id}/>}
    noBody
    title={group.name}>
    <Table
      columnConfig={group.columns.map(columnId => { return { headerLabel: columns[columnId].name }; })}
      />
  </GridBox>;

export default connect(
  (state, props) => ({
    group: state.definition.groups[props.groupId],
    columns: state.definition.columns
  })
)(RepeatingGroupContainer);
