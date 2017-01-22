import Checkbox from 'silk-react-components';
import Radium from 'radium';
import React from 'react';
import structure from '../structure';

const TableCell = ({ additionalStyles, cellType, children, className }) => {
  let cellCheckbox;

  if (cellType && cellType.toLowerCase() === 'checkbox') {
    const preventRowSelection = (event) => {
      event.stopPropagation();
    };
    cellCheckbox = (
      <Checkbox
        type="checkbox"
        onClick={preventRowSelection}
      />
    );
  }

  return (
    <td
      style={[structure.tableCell, additionalStyles]}
    >
      {children}
      {cellCheckbox}
    </td>
  );
};

TableCell.propTypes = {
  additionalStyles: React.PropTypes.object,
  cellType: React.PropTypes.string,
  children: React.PropTypes.node,
  className: React.PropTypes.string
};

TableCell.displayName = 'TableCell';

export default Radium(TableCell);
