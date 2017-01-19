import React from 'react';
import { connect } from 'react-redux';
import { Textbox, Dropdown, DatePicker, RadioGroup, Checkbox, Button, GridRow } from 'silk-react-components';

const renderTextBox = (field) =>
  <Textbox
    orientation="horizontal"
    label={field.name}
    labelAlign="left"
    width={200}
    placeholder={field.description}/>

const renderDropDown = (field, options) =>
  <Dropdown
    orientation="horizontal"
    data={field.options.map(optionId => options[optionId].value)}
    label={field.name}
    labelAlign="left"
    width={50}
    placeholder={field.description}/>

const renderOption = (field, options) =>
  <RadioGroup
    orientation="horizontal"
    label={field.name}
    labelAlign="left"
    buttons={field.options.map(optionId => { return { value: options[optionId].id, label: options[optionId].value, checked: false } })}
    onChange={() => {}}/>

const renderCheckBox = (field, options) =>
  <Checkbox
    orientation="horizontal"
    label={field.name}
    labelAlign="left" />

const renderDate = (field) =>
  <DatePicker
    name="hello"
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


const Field = ({field, options}) => {
  if(field.type == 'text') {
    return renderTextBox(field);
  }
  if(field.type == 'number') {
    return renderTextBox(field);
  }
  if(field.type == 'dropdown') {
    return renderDropDown(field, options);
  }
  if(field.type == 'option') {
    return renderOption(field, options);
  }
  if(field.type == 'checkbox') {
    return renderCheckBox(field, options);
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
    options : state.definitions.options
   }),
  dispatch => ({
  })
)(Field)
