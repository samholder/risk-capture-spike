import React from 'react';
import { GridBox } from 'silk-react-components';
import Form from '../Fields/Form';

const StandardGroup = ({group}) =>
  <GridBox
    className="space-right-large"
    title={group.name}>
    <Form group={group} />
  </GridBox>

export default StandardGroup;
