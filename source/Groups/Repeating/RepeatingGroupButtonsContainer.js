import React from 'react';
import { connect } from 'react-redux';
import { IconStrip } from 'silk-react-components';
import addRepeatingGroupItem from './Actions/AddRepeatingGroupItemActionCreator';
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
    icons={['add', 'delete']} />;

export default connect(
  (state, props) => ({
    instance: state.instancing.instances[props.groupId]
  }),
  dispatch => ({
     onAddRepeatingGroupItem: instance => dispatch(addRepeatingGroupItem(instance)),
     onDeleteRepeatingGroupItem: () => dispatch(deleteRepeatingGroupItem()),
  })
)(RepeatingGroupButtonsContainer);
