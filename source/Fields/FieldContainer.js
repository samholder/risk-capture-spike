import React from 'react';
import { connect } from 'react-redux';
import TextField from './TextField';
import DropDownField from './DropDownField';
import OptionField from './OptionField';
import CheckBoxField from './CheckBoxField';
import DateField from './DateField';
import PostCodeLookupField from './PostCodeLookupField';
import { resolveValueFromSource } from '../Sources/SourceValueResolver';
import fieldUpdated from './Actions/FieldUpdatedActionCreator';

const renderTextBox = (field, value, onChange) =>
  <TextField
    field={field}
    value={value}
    onChange={onChange}/>;

const renderDropDown = (field, value, onChange) =>
  <DropDownField
    field={field}
    value={value}
    onChange={onChange}/>;

const renderOption = (field, value, onChange) =>
  <OptionField
    field={field}
    value={value}
    onChange={onChange}/>;

const renderCheckBox = (field, value, onChange) =>
  <CheckBoxField
    field={field}
    value={value}
    onChange={onChange}/>;

const renderDate = (field, value, onChange) =>
  <DateField
    field={field}
    value={value}
    onChange={onChange} />;

const renderPostCodeLookup = (field, value, onChange) =>
  <PostCodeLookupField
    field={field}
    value={value}
    onChange={onChange} />;

const FieldContainer = ({field, sources, risk, instance, onChange}) => {

  const source = sources[field.source];
  const value = resolveValueFromSource(source, instance, instance.currentInstanceId, risk);

  const onChangeValue = (changed) => onChange(
    source.riskItem,
    instance.currentInstanceId,
    instance.parentInstanceId,
    changed);

  if (field.type === 'text') {
    return renderTextBox(field, value, onChangeValue);
  }
  if (field.type === 'number') {
    return renderTextBox(field, value, onChangeValue);
  }
  if (field.type === 'dropdown') {
    return renderDropDown(field, value, onChangeValue);
  }
  if (field.type === 'option') {
    return renderOption(field, value, onChangeValue);
  }
  if (field.type === 'checkbox') {
    return renderCheckBox(field, value, onChangeValue);
  }
  if (field.type === 'date') {
    return renderDate(field, value, onChangeValue);
  }
  if (field.type === 'postcode-lookup') {
    return renderPostCodeLookup(field, value, onChangeValue);
  }
  return null;
};

export default connect(
  (state, props) => ({
    field: state.definition.fields[props.id],
    sources: state.definition.sources,
    instance: state.instancing.instances[props.groupId],
    risk: state.risk
   }),
  dispatch => ({
    onChange: (riskItem, instanceId, parentInstanceId, value) => dispatch(fieldUpdated(riskItem, instanceId, parentInstanceId, value))
  })
)(FieldContainer);
