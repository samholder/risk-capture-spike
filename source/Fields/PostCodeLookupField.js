import React from 'react';
import { GridRow } from 'silk-react-components';
import TextField from './TextField';

const PostCodeLookupField = ({field, value, onChange}) =>
  <GridRow>
    <TextField
      field={field}
      value={value}
      onChange={onChange}/>
    <Button
      name={field.fieldName + '_find'}
      type="dark"
      value="Find address" />
  </GridRow>

export default PostCodeLookupField;
