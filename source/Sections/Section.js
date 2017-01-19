import React from 'react';
import { connect } from 'react-redux';
import { GridBox, Table, IconStrip } from 'silk-react-components';
import Field from '../Fields/Field';
import RepeatingGroupSelector from '../Groups/RepeatingGroupSelector';

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

const renderStandardSection = (section) =>
  <GridBox
    className="space-right-large"
    title={section.name}>
    <div style={formContainer}>
      {renderStandardFields(section)}
    </div>
  </GridBox>

const renderStandardFields = (section) =>
  section.fields.map(fieldId => {
     return(
       <div style={formRow}>
        <Field id={fieldId}/>
      </div>
     );
   });

const renderRepeatingGroupSelector = (section) =>
  <RepeatingGroupSelector section={section} />

const renderRepeatingGroupSelectorHeaderIcons = () =>
  <IconStrip
    onIconClicked={x => {debugger;}}
    size="27"
    icons={['add', 'edit', 'delete']} />

const Section = ({section, fields}) => {
  if(section.type == 'standard') {
    return renderStandardSection(section);
  }
  if(section.type == 'repeating-group-selection') {
    return renderRepeatingGroupSelector(section, fields);
  }
  if(section.type == 'repeating-group-body') {
    return renderStandardSection(section);
  }
}

export default connect(
  (state, props) => ({
    section: state.definitions.sections[props.id],
    fields: state.definitions.fields
  }),
  dispatch => ({})
)(Section)
