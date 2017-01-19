import { normalize, schema } from 'normalizr';

const policyDefinitionsDefined = (definitions) => {
  return {
      type: 'DEFINITIONS_DEFINED',
      definitions: definitions
  }
};

const option = new schema.Entity(
  'options', {
});

const field = new schema.Entity(
  'fields', {
    options: [ option ]
});

const section = new schema.Entity(
  'sections', {
    fields: [ field ]
  });

const group = new schema.Entity(
  'groups', {
    sections: [ section ]
  }, {
    idAttribute: 'name',
  });

const definition = new schema.Entity(
  'policies', {
    groups: [ group ]
});

const setPolicyDefinitions = (hierachicalDefinition) =>
  (dispatch, getState) => {
    const flatDefinition = normalize(hierachicalDefinition, [definition]).entities;
    dispatch(policyDefinitionsDefined(flatDefinition));
  }

export default setPolicyDefinitions;
