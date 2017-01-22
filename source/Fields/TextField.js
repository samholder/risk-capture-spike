import React from 'react';
import { Textbox } from 'silk-react-components';

const TextField = ({field, value, disabled, onChange}) =>
  <Textbox
    name={field.fieldName}
    disabled={disabled}
    key={field.fieldName + value}
    required={field.required}
    orientation="horizontal"
    label={field.name}
    labelAlign="left"
    width={200}
    placeholder={field.description}
    defaultValue={value}
    onBlur={event => onChange(event.target.value)}/>;

export default TextField;
