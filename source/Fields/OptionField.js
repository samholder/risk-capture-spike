import React from 'react';
import { RadioGroup } from 'silk-react-components';

const OptionField = ({field, source, options, value, onChange}) =>
  <RadioGroup
    required={field.required}
    name={field.fieldName}
    orientation="horizontal"
    label={field.name}
    labelAlign="left"
    buttons={field.options.map(option => {
      return {
        value: option,
        label: option,
        checked: value == option
      }})}
    onChange={option => onChange(source.riskItem, option)}/>


export default OptionField;
