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

const group = new schema.Entity(
  'groups', {
    fields: [ field ]
  });

const page = new schema.Entity(
  'pages', {
    groups: [ group ]
  }, {
    idAttribute: 'name',
  });

const definition = new schema.Entity(
  'policies', {
    pages: [ page ]
});

const setPolicyDefinitions = (hierachicalDefinition) =>
  (dispatch, getState) => {
    const flatDefinition = normalize(hierachicalDefinition, [definition]).entities;
    dispatch(policyDefinitionsDefined(flatDefinition));
  }

export default setPolicyDefinitions;
