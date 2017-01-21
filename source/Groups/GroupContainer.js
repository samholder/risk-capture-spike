import React from 'react';
import { connect } from 'react-redux';
import StandardGroup from './StandardGroup';
import RepeatingGroup from './Repeating/RepeatingGroup';

const GroupContainer = ({group, columns, instances}) => {
  if (group.columns.length === 0) {
    return (<StandardGroup group={group} instances={instances} />);
  } else {
    return (<RepeatingGroup group={group} columns={columns}/>);
  }
};

export default connect(
  (state, props) => ({
    group: state.definition.groups[props.id],
    columns: state.definition.columns,
    instances: state.instances
  })
)(GroupContainer);
