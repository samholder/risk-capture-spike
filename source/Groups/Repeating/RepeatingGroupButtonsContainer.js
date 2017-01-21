import React from 'react';
import { connect } from 'react-redux';
import { IconStrip } from 'silk-react-components';
import addRepeatingGroupItem from './Actions/AddRepeatingGroupItemActionCreator';
import editRepeatingGroupItem from './Actions/EditRepeatingGroupItemActionCreator';
import deleteRepeatingGroupItem from './Actions/DeleteRepeatingGroupItemActionCreator';

const onIconClicked = (
  instance,
  icon,
  onAddRepeatingGroupItem,
  onEditRepeatingGroupItem,
  onDeleteRepeatingGroupItem) => {
    if (icon === 'add') {
      onAddRepeatingGroupItem(instance);
    }
    if (icon === 'edit') {
      onEditRepeatingGroupItem();
    }
    if (icon === 'delete') {
      onDeleteRepeatingGroupItem();
    }
  };

const RepeatingGroupButtonsContainer = ({
  instance,
  onAddRepeatingGroupItem,
  onEditRepeatingGroupItem,
  onDeleteRepeatingGroupItem}) =>
  <IconStrip
    onIconClicked={iconName => onIconClicked(
      instance,
      iconName,
      onAddRepeatingGroupItem,
      onEditRepeatingGroupItem,
      onDeleteRepeatingGroupItem)}
    size="27"
    icons={['add', 'edit', 'delete']} />;

export default connect(
  (state, props) => ({
    instance: state.instancing.instances[props.groupId]
  }),
  dispatch => ({
     onAddRepeatingGroupItem: instance => dispatch(addRepeatingGroupItem(instance)),
     onEditRepeatingGroupItem: () => dispatch(editRepeatingGroupItem()),
     onDeleteRepeatingGroupItem: () => dispatch(deleteRepeatingGroupItem()),
  })
)(RepeatingGroupButtonsContainer);
