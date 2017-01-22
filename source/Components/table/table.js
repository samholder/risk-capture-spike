
import { KeyCodes, TableKeys } from '../key-codes';
import Radium from 'radium';
import React from 'react';
import structure from '../structure';
import TableCell from './table-cell';
import TableHeaderCell from './table-header-cell';
import TableRow from './table-row';


class Table extends React.Component {

  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.canChangeRowIndexTo = this.canChangeRowIndexTo.bind(this);
    this.changeRowIndexTo = this.changeRowIndexTo.bind(this);
  }

  createRows() {
    const rowId = Math.random().toString(36).substring(9);
    const rows = this.props.rowData;
    return rows.map((row, index) => {
      const selected = this.props.selectedRowIndex === index;
      return (
        <TableRow
          key={index}
          onRowSelected={this.props.onRowSelected}
          rowIndex={index}
          selected={selected}
          rowId={rowId}
        >
          {this.createCells(row)}
        </TableRow>
      );
    });
  }

  createHeaderCells() {
    const columns = this.props.columnConfig;
    return columns.map((column, index) =>
      <TableHeaderCell key={index} additionalStyles={column.headerStyle}>
        {column.headerLabel}
      </TableHeaderCell>
    );
  }

  createCells(row) {
    return row.map((cellContent, index) => {
      const column = this.props.columnConfig[index];
      return (
        <TableCell
          key={index}
          additionalStyles={column.cellStyle}
          cellType={column.type}
        >
          {cellContent}
        </TableCell>
      );
    });
  }

  canChangeRowIndexTo(index) {
    const numberOfRows = this.props.rowData.length;

    if (Number.isInteger(index) && index >= 0 && index <= numberOfRows - 1) {
      return true;
    }

    return false;
  }

  changeRowIndexTo(index) {
    if (this.canChangeRowIndexTo(index)) {
      this.props.onRowSelected(index);
    }
  }

  modifyRowIndexBy(modifier) {
    const currentIndex = this.props.selectedRowIndex;
    const newIndex = currentIndex + modifier;

    this.changeRowIndexTo(newIndex);
  }

  handleKeyDown(e) {
    const keyCode = e.which;
    const isUsedKey = TableKeys.indexOf(keyCode) >= 0;
    if (isUsedKey) {
      e.preventDefault();

      switch (keyCode) {

        case KeyCodes.DOWN:
          this.modifyRowIndexBy(1);
          break;

        case KeyCodes.UP:
          this.modifyRowIndexBy(-1);
          break;

        case KeyCodes.PGUP: {
          this.changeRowIndexTo(0);
          break;
        }

        case KeyCodes.PGDOWN: {
          this.changeRowIndexTo(this.props.rowData.length - 1);
          break;
        }

        default:
          throw new Error('NoActionAssociatedWithKey');
      }
    }
  }

  render() {
    return (
      <div
        style={structure.tableWrapper}
      >
        <table style={structure.table} tabIndex="-1" onKeyDown={this.handleKeyDown}>
          <thead>
            <tr style={structure.tableHeaderRow} className="table-header-row">
              {this.createHeaderCells()}
            </tr>
          </thead>
          <tbody style={structure.tableBody}>
            {this.createRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  className: React.PropTypes.string,
  columnConfig: React.PropTypes.array.isRequired,
  onRowSelected: React.PropTypes.func,
  rowData: React.PropTypes.array,
  selectedRowIndex: React.PropTypes.number
};

Table.defaultProps = {
  rowData: []
};

Table.displayName = 'Table';

export default Radium(Table);
