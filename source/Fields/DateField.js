import React from 'react';
import { Textbox } from 'silk-react-components';

const DateField = ({field, source, value, onChange}) =>
  <Textbox
    name={field.fieldName}
    required={field.required}
    orientation="horizontal"
    label={field.name}
    labelAlign="left"
    width={200}
    placeholder="DD / MM / YYYY"
    defaultValue={value}
    onBlur={event => onChange(source.riskItem, event.target.value)}/>

export default DateField;

/*
when it works:
<DatePicker
  hideOpenButton
  orientation="horizontal"
  label={field.name}
  labelAlign="left"/>
*/
