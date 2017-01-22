
import Radium from 'radium';
import React from 'react';
import ReactDOM from 'react-dom';
import structure from '../structure';

class TableRow extends React.Component {

  constructor() {
    super();
    this.doHandleSelect = this.doHandleSelect.bind(this);
  }

  componentDidUpdate() {
    const activeNode = ReactDOM.findDOMNode(document.activeElement);
    const rowNode = ReactDOM.findDOMNode(this);

    if (this.props.selected && rowNode.id === activeNode.id) {
      rowNode.focus();
    }
  }

  doHandleSelect() {
    return this.props.onRowSelected && this.props.onRowSelected(this.props.rowIndex);
  }

  render() {
    const { children, rowId, selected } = this.props;
    const rowStructure = selected ? structure.tableRowSelected : structure.tableRow;
    return (
      <tr
        id={rowId}
        onClick={this.doHandleSelect}
        style={rowStructure}
        tabIndex={selected ? 0 : -1}
      >
        {children}
      </tr>
    );
  }
}


TableRow.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  onRowSelected: React.PropTypes.func,
  rowId: React.PropTypes.string,
  rowIndex: React.PropTypes.number,
  selected: React.PropTypes.bool
};

TableRow.displayName = 'TableRow';

export default Radium(TableRow);
