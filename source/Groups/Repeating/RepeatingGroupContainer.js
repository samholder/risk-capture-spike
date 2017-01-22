import React from 'react';
import { connect } from 'react-redux';
import { GridBox } from 'silk-react-components';
import { Table } from '../../Components';
import RepeatingGroupButtonsContainer from './RepeatingGroupButtonsContainer';
import { resolveValueFromSource } from '../../Sources/SourceValueResolver';
import selectRepeatingGroupItem from './Actions/SelectRepeatingGroupItemActionCreator';

const getColumns = (group, columns) =>
  group.columns.map(columnId => {
    return {
      headerLabel: columns[columnId].name
    };
  });

const getRows = (group, columns, instance, risk, sources) => {
  var rows = instance.availableInstances.map(instanceId =>
    group.columns.map(columnId =>
      resolveValueFromSource(
        sources[columns[columnId].source],
        instance,
        instanceId,
        risk)
      )
    );
    return rows;
  }

const RepeatingGroupContainer = ({group, columns, instance, risk, sources, onRowSelected}) =>
  <GridBox
    buttons={<RepeatingGroupButtonsContainer groupId={group.id}/>}
    noBody
    title={group.name}>
    <Table
      columnConfig={getColumns(group, columns)}
      rowData={getRows(group, columns, instance, risk, sources)}
      onRowSelected={index => onRowSelected(instance, Object.values(instance.availableInstances)[index])}
      selectedRowIndex={instance.availableInstances.findIndex(i => i === instance.currentInstanceId)}
      />
  </GridBox>;

export default connect(
  (state, props) => ({
    group: state.definition.groups[props.groupId],
    columns: state.definition.columns,
    instance: state.instancing.instances[props.groupId],
    risk: state.risk,
    sources: state.definition.sources
  }),
 dispatch => ({
   onRowSelected: (instance, selectedInstanceId) => dispatch(selectRepeatingGroupItem(instance, selectedInstanceId))
 })
)(RepeatingGroupContainer);
