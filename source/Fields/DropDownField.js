import React from 'react';
import { Dropdown } from 'silk-react-components';

const DropDownField = ({field, value, disabled, onChange}) =>
  <Dropdown
    name={field.fieldName}
    disabled={disabled}
    required={field.required}
    key={field.fieldName + value}
    orientation="horizontal"
    data={field.options}
    label={field.name}
    labelAlign="left"
    width={50}
    placeholder={field.description}
    defaultValue={value}
    onChange={option => onChange(option)}/>;

export default DropDownField;
