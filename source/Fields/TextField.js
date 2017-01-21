import React from 'react';
import { Textbox } from 'silk-react-components';

const TextField = ({field, source, value, onChange}) =>
  <Textbox
    name={field.fieldName}
    required={field.required}
    orientation="horizontal"
    label={field.name}
    labelAlign="left"
    width={200}
    placeholder={field.description}
    defaultValue={value}
    onBlur={event => onChange(source.riskItem, event.target.value)}/>

export default TextField;
