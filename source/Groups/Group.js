import React from 'react';
import { connect } from 'react-redux';
import { GridBox, Table, IconStrip } from 'silk-react-components';
import Field from '../Fields/Field';
import RepeatingGroupSelector from './RepeatingGroupSelector';

const formContainer = {
  width: '450px'
};

const formRow = {
  display: 'flex',
  alignItems: 'center'
};


const spaceRightLarge = {
  margin: '10px'
};

const renderStandardGroup = (group) =>
  <GridBox
    className="space-right-large"
    title={group.name}>
    <div style={formContainer}>
      {renderStandardFields(group)}
    </div>
  </GridBox>

const renderStandardFields = (group) =>
  group.fields.map(fieldId => {
     return(
       <div style={formRow}>
        <Field id={fieldId}/>
      </div>
     );
   });

const renderRepeatingGroupSelector = (group) =>
  <RepeatingGroupSelector group={group} />

const renderRepeatingGroupSelectorHeaderIcons = () =>
  <IconStrip
    onIconClicked={x => {debugger;}}
    size="27"
    icons={['add', 'edit', 'delete']} />

const Group = ({group, fields}) => {
  if(group.type == 'standard') {
    return renderStandardGroup(group);
  }
  if(group.type == 'repeating-group-selection') {
    return renderRepeatingGroupSelector(group, fields);
  }
  if(group.type == 'repeating-group-body') {
    return renderStandardGroup(group);
  }
}

export default connect(
  (state, props) => ({
    group: state.definitions.groups[props.id],
    fields: state.definitions.fields
  }),
  dispatch => ({})
)(Group)
