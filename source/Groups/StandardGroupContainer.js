import React from 'react';
import { connect } from 'react-redux';
import { GridBox } from 'silk-react-components';
import Form from '../Fields/Form';

const StandardGroupContainer = ({group}) =>
  <GridBox
    className="space-right-large"
    title={group.name}>
    <Form group={group} />
  </GridBox>;

export default connect(
  (state, props) => ({
    group: state.definition.groups[props.groupId]
  })
)(StandardGroupContainer);
