import React from 'react';
import { GridRow } from 'silk-react-components';
import TextField from './TextField';

const PostCodeLookupField = ({field, source, value, disabled, onChange}) =>
  <GridRow>
    <TextField
      field={field}
      disabled={disabled}
      source={source}
      value={value}
      onChange={onChange}/>
    <Button
      name={field.fieldName + '_find'}
      disabled={disabled}
      type="dark"
      value="Find address" />
  </GridRow>;

export default PostCodeLookupField;
