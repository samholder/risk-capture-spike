import React from 'react';
import { Dropdown } from 'silk-react-components';

const DropDownField = ({field, source, options, value, onChange}) =>
  <Dropdown
    name={field.fieldName}
    required={field.required}
    orientation="horizontal"
    data={field.options}
    label={field.name}
    labelAlign="left"
    width={50}
    placeholder={field.description}
    defaultValue={value}
    onChange={option => onChange(source.riskItem, option)}/>

export default DropDownField;
