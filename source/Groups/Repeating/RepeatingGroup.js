import React from 'react';
import { GridBox, Table } from 'silk-react-components';
import RepeatingGroupButtonsContainer from './RepeatingGroupButtonsContainer';

const RepeatingGroup = ({group, columns}) =>
  <GridBox
    buttons={<RepeatingGroupButtonsContainer />}
    noBody
    title={group.name}>
    <Table
      columnConfig={group.columns.map(columnId => { return { headerLabel: columns[columnId].name } })} />
  </GridBox>

export default RepeatingGroup;
