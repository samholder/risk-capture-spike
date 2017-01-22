import React from 'react';
import FieldContainer from './FieldContainer';

const formContainer = {
  width: '600px'
};

const formRow = {
  display: 'flex',
  alignItems: 'center'
};

const renderFields = (group) =>
  group.fields.map(fieldId => {
     return (
       <div style={formRow}>
        <FieldContainer id={fieldId} groupId={group.id}/>
      </div>
    );
   });

const Form = ({group}) =>
  <div style={formContainer}>{renderFields(group)}</div>;

export default Form;
