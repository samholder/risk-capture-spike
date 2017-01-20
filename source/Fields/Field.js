import React from 'react';
import { connect } from 'react-redux';
import TextField from './TextField';
import DropDownField from './DropDownField';
import OptionField from './OptionField';
import CheckBoxField from './CheckBoxField';
import DateField from './DateField';
import PostCodeLookupField from './PostCodeLookupField';
import fieldUpdated from './Actions/FieldUpdatedActionCreator';

const renderTextBox = (field, riskValue, onChange) =>
  <TextField
    field={field}
    value={riskValue}
    onChange={onChange}/>

const renderDropDown = (field, options, riskValue, onChange) =>
  <DropDownField
    field={field}
    options={options}
    value={riskValue}
    onChange={onChange}/>

const renderOption = (field, options, riskValue, onChange) =>
  <OptionField
    field={field}
    options={options}
    value={riskValue}
    onChange={onChange}/>

const renderCheckBox = (field, riskValue, onChange) =>
  <CheckBoxField
    field={field}
    value={riskValue}
    onChange={onChange}/>

const renderDate = (field, riskValue, onChange) =>
  <DateField
    field={field}
    value={riskValue}
    onChange={onChange} />

const renderPostCodeLookup = (field) =>
  <PostCodeLookupField
    field={field}
    value={riskValue}
    onChange={onChange} />


const Field = ({field, options, riskValue, onChange}) => {
  if(field.type == 'text') {
    return renderTextBox(field, riskValue, onChange);
  }
  if(field.type == 'number') {
    return renderTextBox(field, riskValue, onChange);
  }
  if(field.type == 'dropdown') {
    return renderDropDown(field, options, riskValue, onChange);
  }
  if(field.type == 'option') {
    return renderOption(field, options, riskValue, onChange);
  }
  if(field.type == 'checkbox') {
    return renderCheckBox(field, riskValue, onChange);
  }
  if(field.type == 'date') {
    return renderDate(field, riskValue, onChange);
  }
  if(field.type == 'postcode-lookup') {
    return renderPostCodeLookup(field, riskValue, onChange);
  }
  return null;
}

export default connect(
  (state, props) => ({
    field : state.definitions.fields[props.id],
    riskValue : state.risk.some(r => r.riskItemId == props.id) ? state.risk.find(r => r.riskItemId == props.id).value : ''
   }),
  dispatch => ({
    onChange: (riskItemId, value) => dispatch(fieldUpdated(riskItemId, value))
  })
)(Field)
