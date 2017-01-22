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
  let rows = instance.availableInstances.map(instanceId =>
    group.columns.map(columnId =>
      resolveValueFromSource(
        sources[columns[columnId].source],
        instance,
        instanceId,
        risk)
      )
    );
  return rows;
};

const renderTableIfAnInstanceIsCurrent = (group, columns, instances, risk, sources, onRowSelected) => {
  if (group.id in instances) {
    let instance = instances[group.id];
    return (
      <Table
        columnConfig={getColumns(group, columns)}
        rowData={getRows(group, columns, instance, risk, sources)}
        onRowSelected={index => onRowSelected(instance, Object.values(instance.availableInstances)[index])}
        selectedRowIndex={instance.availableInstances.findIndex(i => i === instance.currentInstanceId)}
        />);
    }
    return ( <Table columnConfig={getColumns(group, columns)} /> );
};

const RepeatingGroupContainer = ({group, columns, instances, risk, sources, onRowSelected}) =>
  <GridBox
    buttons={<RepeatingGroupButtonsContainer groupId={group.id}/>}
    noBody
    title={group.name}>
    { renderTableIfAnInstanceIsCurrent(group, columns, instances, risk, sources, onRowSelected) }
  </GridBox>;

export default connect(
  (state, props) => ({
    group: state.definition.groups[props.groupId],
    columns: state.definition.columns,
    instances: state.instancing.instances,
    risk: state.risk,
    sources: state.definition.sources
  }),
 dispatch => ({
   onRowSelected: (instance, selectedInstanceId) => dispatch(selectRepeatingGroupItem(instance, selectedInstanceId))
 })
)(RepeatingGroupContainer);
