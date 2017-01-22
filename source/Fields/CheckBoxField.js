import React from 'react';
import { Checkbox } from 'silk-react-components';

const CheckBoxField = ({field, value, onChange}) =>
  <Checkbox
    required={field.required}
    key={field.fieldName + value}
    name={field.fieldName}
    orientation="horizontal"
    label={field.name}
    labelAlign="left"
    defaultChecked={value === 'Y'}
    onChange={event => onChange(event.target.checked ? 'Y' : 'N') }/>;


export default CheckBoxField;
