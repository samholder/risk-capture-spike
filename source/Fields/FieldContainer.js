import React from 'react';
import { connect } from 'react-redux';
import TextField from './TextField';
import DropDownField from './DropDownField';
import OptionField from './OptionField';
import CheckBoxField from './CheckBoxField';
import DateField from './DateField';
import PostCodeLookupField from './PostCodeLookupField';
import fieldUpdated from './Actions/FieldUpdatedActionCreator';

const renderTextBox = (field, source, value, onChange) =>
  <TextField
    field={field}
    source={source}
    value={value}
    onChange={onChange}/>

const renderDropDown = (field, source, value, onChange) =>
  <DropDownField
    field={field}
    source={source}
    value={value}
    onChange={onChange}/>

const renderOption = (field, source, value, onChange) =>
  <OptionField
    field={field}
    source={source}
    value={value}
    onChange={onChange}/>

const renderCheckBox = (field, source, value, onChange) =>
  <CheckBoxField
    field={field}
    source={source}
    value={value}
    onChange={onChange}/>

const renderDate = (field, source, value, onChange) =>
  <DateField
    field={field}
    source={source}
    value={value}
    onChange={onChange} />

const renderPostCodeLookup = (field, source, value, onChange) =>
  <PostCodeLookupField
    field={field}
    source={source}
    value={value}
    onChange={onChange} />

  const FieldContainer = ({field, sources, risk, onChange}) => {
    let value = '';
    const source = sources[field.source];

    if(source.type == 'riskItem') {
      value = risk.some(r => r.riskItem == source.riskItem)
        ? risk.find(r => r.riskItem == source.riskItem).value
        : ''
    }

  if(field.type == 'text') {
    return renderTextBox(field, source, value, onChange);
  }
  if(field.type == 'number') {
    return renderTextBox(field, source, value, onChange);
  }
  if(field.type == 'dropdown') {
    return renderDropDown(field, source, value, onChange);
  }
  if(field.type == 'option') {
    return renderOption(field, source, value, onChange);
  }
  if(field.type == 'checkbox') {
    return renderCheckBox(field, source, value, onChange);
  }
  if(field.type == 'date') {
    return renderDate(field, source, value, onChange);
  }
  if(field.type == 'postcode-lookup') {
    return renderPostCodeLookup(field, source, value, onChange);
  }
  return null;
}

export default connect(
  (state, props) => ({
    field : state.definition.fields[props.id],
    sources : state.definition.sources,
    risk : state.risk
   }),
  dispatch => ({
    onChange: (riskItem, value) => dispatch(fieldUpdated(riskItem, value))
  })
)(FieldContainer)
