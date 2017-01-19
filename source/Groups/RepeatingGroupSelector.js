import React from 'react';
import { connect } from 'react-redux';
import { GridBox, Table, IconStrip } from 'silk-react-components';
import addRepeatingGroupItem from './Actions/AddRepeatingGroupItemActionCreator';
import editRepeatingGroupItem from './Actions/EditRepeatingGroupItemActionCreator';
import deleteRepeatingGroupItem from './Actions/DeleteRepeatingGroupItemActionCreator';

const onIconClicked = (icon, onAddRepeatingGroupItem, onEditRepeatingGroupItem, onDeleteRepeatingGroupItem) => {
  if(icon == 'add') {
    onAddRepeatingGroupItem();
  }
  if(icon == 'edit') {
    onEditRepeatingGroupItem();
  }
  if(icon == 'delete') {
    onDeleteRepeatingGroupItem();
  }
}

const renderHeaderIcons = (onAddRepeatingGroupItem, onEditRepeatingGroupItem, onDeleteRepeatingGroupItem) =>
  <IconStrip
    onIconClicked={iconName => onIconClicked(iconName, onAddRepeatingGroupItem, onEditRepeatingGroupItem, onDeleteRepeatingGroupItem)}
    size="27"
    icons={['add', 'edit', 'delete']} />

const RepeatingGroupSelector = ({section, fields, onAddRepeatingGroupItem, onEditRepeatingGroupItem, onDeleteRepeatingGroupItem}) =>
  <GridBox
    buttons={renderHeaderIcons(onAddRepeatingGroupItem, onEditRepeatingGroupItem, onDeleteRepeatingGroupItem)}
    hAlign="center"
    noBody
    title={section.name}>
    <Table
      columnConfig={section.fields.map(fieldId => { return { headerLabel: fields[fieldId].name } })} />
  </GridBox>

export default connect(
  state => ({
    fields: state.definitions.fields
  }),
  dispatch => ({
     onAddRepeatingGroupItem : () => dispatch(addRepeatingGroupItem()),
     onEditRepeatingGroupItem : () => dispatch(editRepeatingGroupItem()),
     onDeleteRepeatingGroupItem : () => dispatch(deleteRepeatingGroupItem()),
  })
)(RepeatingGroupSelector)
