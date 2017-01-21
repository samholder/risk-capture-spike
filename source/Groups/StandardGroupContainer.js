import React from 'react';
import { connect } from 'react-redux';
import { GridBox } from 'silk-react-components';
import Form from '../Fields/Form';

const renderFormIfAnInstanceIsCurrent = (group, instances) => {
  if (group.id in instances) {
    return (<Form group={group} />);
  }
};

const StandardGroupContainer = ({group, instances}) =>
  <GridBox
    className="space-right-large"
    title={group.name}>
    { renderFormIfAnInstanceIsCurrent(group, instances) }
  </GridBox>;

export default connect(
  (state, props) => ({
    group: state.definition.groups[props.groupId],
    instances: state.instancing.instances
  })
)(StandardGroupContainer);
