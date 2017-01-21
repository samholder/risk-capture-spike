import React from 'react';
import { GridBox } from 'silk-react-components';
import Form from '../Fields/Form';

const renderFormIfAnInstanceIsCurrent = (group, instances) => {
  if (group.id in instances) {
    return (<Form group={group} />);
  }
};

const StandardGroup = ({group, instances}) =>
  <GridBox
    className="space-right-large"
    title={group.name}>
    { renderFormIfAnInstanceIsCurrent(group, instances) }
  </GridBox>;

export default StandardGroup;
