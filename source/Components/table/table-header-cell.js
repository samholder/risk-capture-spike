import Radium from 'radium';
import React from 'react';
import structure from '../structure';

const TableHeaderCell = ({ additionalStyles, children, className }) => (
  <th
    style={[structure.tableHeaderCell, additionalStyles]}
  >
    {children}
  </th>
);

TableHeaderCell.propTypes = {
  additionalStyles: React.PropTypes.object,
  children: React.PropTypes.node,
  className: React.PropTypes.node
};

TableHeaderCell.displayName = 'TableHeaderCell';

export default Radium(TableHeaderCell);
