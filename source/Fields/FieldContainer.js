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

const renderTextBox = (field, value, disabled, onChange) =>
  <TextField
    field={field}
    disabled={disabled}
    value={value}
    onChange={onChange}/>;

const renderDropDown = (field, value, disabled, onChange) =>
  <DropDownField
    field={field}
    disabled={disabled}
    value={value}
    onChange={onChange}/>;

const renderOption = (field, value, disabled, onChange) =>
  <OptionField
    field={field}
    disabled={disabled}
    value={value}
    onChange={onChange}/>;

const renderCheckBox = (field, value, disabled, onChange) =>
  <CheckBoxField
    field={field}
    disabled={disabled}
    value={value}
    onChange={onChange}/>;

const renderDate = (field, value, disabled, onChange) =>
  <DateField
    field={field}
    disabled={disabled}
    value={value}
    onChange={onChange} />;

  const renderPostCodeLookup = (field, value, disabled, onChange) =>
  <PostCodeLookupField
    field={field}
    disabled={disabled}
    value={value}
    onChange={onChange} />;

const FieldContainer = ({field, sources, risk, instance, onChange}) => {

  let value = '';
  let disabled = true;
  let onChangeValue = () => {};

  if (instance !== null) {
    const source = sources[field.source];
    onChangeValue = (changed) => onChange(
      source.riskItem,
      instance.currentInstanceId,
      instance.parentInstanceId,
      changed);
    value = resolveValueFromSource(source, instance, instance.currentInstanceId, risk);
    disabled = false;
  }

  if (field.type === 'text') {
    return renderTextBox(field, value, disabled, onChangeValue);
  }
  if (field.type === 'number') {
    return renderTextBox(field, value, disabled, onChangeValue);
  }
  if (field.type === 'dropdown') {
    return renderDropDown(field, value, disabled, onChangeValue);
  }
  if (field.type === 'option') {
    return renderOption(field, value, disabled, onChangeValue);
  }
  if (field.type === 'checkbox') {
    return renderCheckBox(field, value, disabled, onChangeValue);
  }
  if (field.type === 'date') {
    return renderDate(field, value, disabled, onChangeValue);
  }
  if (field.type === 'postcode-lookup') {
    return renderPostCodeLookup(field, value, disabled, onChangeValue);
  }
  return null;
};

export default connect(
  (state, props) => ({
    field: state.definition.fields[props.id],
    sources: state.definition.sources,
    instance: (props.groupId in state.instancing.instances) ? state.instancing.instances[props.groupId] : null,
    risk: state.risk
   }),
  dispatch => ({
    onChange: (riskItem, instanceId, parentInstanceId, value) => dispatch(fieldUpdated(riskItem, instanceId, parentInstanceId, value))
  })
)(FieldContainer);
