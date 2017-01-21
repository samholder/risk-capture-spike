import React from 'react';
import { connect } from 'react-redux';
import { IconStrip } from 'silk-react-components';
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

const RepeatingGroupButtonsContainer = ({onAddRepeatingGroupItem, onEditRepeatingGroupItem, onDeleteRepeatingGroupItem}) =>
  <IconStrip
    onIconClicked={iconName => onIconClicked(iconName, onAddRepeatingGroupItem, onEditRepeatingGroupItem, onDeleteRepeatingGroupItem)}
    size="27"
    icons={['add', 'edit', 'delete']} />

export default connect(
  state => ({
  }),
  dispatch => ({
     onAddRepeatingGroupItem : () => dispatch(addRepeatingGroupItem()),
     onEditRepeatingGroupItem : () => dispatch(editRepeatingGroupItem()),
     onDeleteRepeatingGroupItem : () => dispatch(deleteRepeatingGroupItem()),
  })
)(RepeatingGroupButtonsContainer)
