import React from 'react';
import { connect } from 'react-redux';
import { Textbox, Dropdown, DatePicker, RadioGroup, Checkbox, Button, GridRow } from 'silk-react-components';
import TextField from './TextField';
import fieldUpdated from './Actions/FieldUpdatedActionCreator';

const renderTextBox = (field, riskValue, onChange) =>
  <TextField
    field={field}
    value={riskValue}
    onChange={onChange}/>

  const renderDropDown = (field, options, riskValue, onChange) =>
  <Dropdown
    required={field.required}
    orientation="horizontal"
    data={field.options}
    label={field.name}
    labelAlign="left"
    width={50}
    placeholder={field.description}
    defaultValue={riskValue}
    onChange={option => onChange(field.riskItemId, option)}/>

const renderOption = (field, options, riskValue, onChange) =>
  <RadioGroup
    required={field.required}
    name={field.name}
    orientation="horizontal"
    label={field.name}
    labelAlign="left"
    buttons={field.options.map(option => {
      return {
        value: option,
        label: option,
        checked: riskValue == option
      }})}
    onChange={option => onChange(field.riskItemId, option)}/>

  const renderCheckBox = (field, riskValue, onChange) =>
  <Checkbox
    required={field.required}
    name={field.name}
    orientation="horizontal"
    label={field.name}
    labelAlign="left"
    defaultChecked={riskValue == 'Y'}
    onChange={event => onChange(field.riskItemId, event.target.checked ? 'Y' : 'N') }/>

const renderDate = (field) =>
  <DatePicker
    hideOpenButton
    orientation="horizontal"
    label={field.name}
    labelAlign="left"/>

const renderPostCodeLookup = (field) =>
  <GridRow>
    <Textbox
      orientation="horizontal"
      label={field.name}
      labelAlign="left"
      width={200}
      placeholder={field.description}/>
    <Button type="dark" value="Find address" />
  </GridRow>

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
    return renderDate(field);
  }
  if(field.type == 'postcode-lookup') {
    return renderPostCodeLookup(field);
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
