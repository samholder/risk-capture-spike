import React from 'react';
import { RadioGroup } from 'silk-react-components';

const OptionField = ({field, value, disabled, onChange}) =>
  <RadioGroup
    required={field.required}
    disabled={disabled}
    name={field.fieldName}
    key={field.fieldName + value}
    orientation="horizontal"
    label={field.name}
    labelAlign="left"
    buttons={field.options.map(option => {
      return {
        value: option,
        label: option,
        checked: value === option
      };
    })}
    onChange={option => onChange(option)}/>;


export default OptionField;
