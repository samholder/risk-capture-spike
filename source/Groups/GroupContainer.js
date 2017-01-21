import React from 'react';
import { connect } from 'react-redux';
import StandardGroup from './StandardGroup';
import RepeatingGroup from './Repeating/RepeatingGroup';

const GroupContainer = ({groups, group, columns}) => {
  if(group.columns.length == 0) {
    return (<StandardGroup group={group} />);
  }
  else {
    return (<RepeatingGroup group={group} columns={columns}/>);
  }
}

export default connect(
  (state, props) => ({
    group: state.definitions.groups[props.id],
    fields: state.definitions.fields,
    columns: state.definitions.columns
  }),
  dispatch => ({
  })
)(GroupContainer)
