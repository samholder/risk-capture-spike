import React from 'react';
import { Checkbox } from 'silk-react-components';

const CheckBoxField = ({field, source, value, onChange}) =>
  <Checkbox
    required={field.required}
    name={field.fieldName}
    orientation="horizontal"
    label={field.name}
    labelAlign="left"
    defaultChecked={value == 'Y'}
    onChange={event => onChange(source.riskItem, event.target.checked ? 'Y' : 'N') }/>


export default CheckBoxField;
