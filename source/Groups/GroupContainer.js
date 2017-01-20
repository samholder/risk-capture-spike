import React from 'react';
import { connect } from 'react-redux';
import { GridBox } from 'silk-react-components';
import Form from '../Fields/Form';
import RepeatingGroupHeader from './RepeatingGroupHeader';

const GroupContainer = ({group}) =>
  <GridBox
    className="space-right-large"
    title={group.name}>
    <Form group={group} />
  </GridBox>

export default connect(
  (state, props) => ({
    groups: state.definitions.groups,
    group: state.definitions.groups[props.id]
  }),
  dispatch => ({})
)(GroupContainer)
