import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import appReducer from 'AppReducer';
import setPolicyDefinitions from './Definitions/SetPolicyDefinitionsActionCreator';
import RiskCapturePage from './RiskCapturePage'

const logger = createLogger();

const store = createStore(
  appReducer,
  applyMiddleware(thunk, logger)
);

store.dispatch(setPolicyDefinitions([{
    id: 1,
    name: 'UK Motor',
    groups: [{
      name: 'Proposer',
      sectionsByRow: [ 2, 2 ],
      sections: [{
        id: 1,
        type: 'standard',
        name: 'Proposer Information',
        fields: [{
            id: 1,
            riskItemId: 1,
            name: 'Title',
            description: 'Your title',
            type: 'dropdown',
            options: [{
              id: 1,
              value : 'Mr'
            },{
              id: 2,
              value : 'Mrs'
            }]
          },{
            id: 2,
            riskItemId: 2,
            name: 'Forename',
            description: 'Forename',
            type: 'text',
            options: []
          },{
            id: 3,
            riskItemId: 3,
            name: 'Surname',
            description: 'Surname',
            type: 'text',
            options: []
          },{
            id: 4,
            riskItemId: 4,
            name: 'Birth date',
            description: 'DD / MM / YYYY ',
            type: 'text',
            options: []
          },{
            id: 5,
            riskItemId: 5,
            name: 'Gender',
            type: 'option',
            description: '',
            options: [{
              id: 3,
              value : 'Male'
            },{
              id: 4,
              value : 'Female'
            }]
          }]
        },{
          id: 2,
          type: 'standard',
          name: 'Contact details',
          fields: [{
              id: 6,
              riskItemId: 6,
              name: 'Primary Tel',
              description: '',
              type: 'text',
              options: []
          },{
              id: 7,
              riskItemId: 7,
              name: 'Secondary Tel',
              description: '',
              type: 'text',
              options: []
          },{
              id: 8,
              riskItemId: 8,
              name: 'Email',
              description: '',
              type: 'text',
              options: []
            }]
        },{
          id: 3,
          type: 'standard',
          name: 'Address',
          fields: [{
              id: 9,
              riskItemId: 9,
              name: 'Proposer address',
              description: 'Postcode',
              type: 'text',
              options: []
            }]
        },{
          id: 4,
          type: 'standard',
          name: 'Additional information',
          fields: [{
              id: 10,
              riskItemId: 10,
              name: 'Has the proposer been previously insured?',
              description: '',
              type: 'checkbox',
              options: []
            },{
              id: 11,
              riskItemId: 11,
              name: 'Is the proposer a caravan/motor club member?',
              description: '',
              type: 'checkbox',
              options: []
            },{
              id: 12,
              riskItemId: 12,
              name: 'Do you own your home?',
              description: '',
              type: 'option',
              options: [{
                id: 5,
                value : 'Yes'
              },{
                id: 6,
                value : 'No'
              }]
            },{
              id: 13,
              riskItemId: 13,
              name: 'Number of vehicles available in family?',
              description: '',
              type: 'number',
              options: []
            }]
        }]
    },{
      name: 'Driver',
      sectionsByRow: [ 1, 1 ],
      sections: [{
        id: 5,
        type: 'repeating-group-selection',
        name: 'Manage drivers',
        fields: [{
          id: 14,
          riskItemId: 14,
          name: 'Forename',
          description: 'Driver forename',
          type: 'text',
          options: []
        },{
          id: 15,
          riskItemId: 15,
          name: 'Surname',
          description: 'Driver surname',
          type: 'text',
          options: []
        },{
          id: 16,
          riskItemId: 16,
          name: 'Age',
          description: 'Driver age',
          type: 'number',
          options: []
        },{
          id: 17,
          riskItemId: 17,
          name: 'Gender',
          description: 'Driver gender',
          type: 'text',
          options: []
        },{
          id: 18,
          riskItemId: 18,
          name: 'Claims',
          description: 'Driver claims',
          type: 'number',
          options: []
        },{
          id: 18,
          riskItemId: 18,
          name: 'Convictions',
          description: 'Driver convictions',
          type: 'number',
          options: []
        },{
          id: 19,
          riskItemId: 19,
          name: 'Relation to proposer',
          description: 'Driver relation to proposer',
          type: 'text',
          options: []
        }]
      },{
        id: 6,
        type: 'repeating-group-body',
        name: 'Driver information',
        fields: [{
          id: 20,
          riskItemId: 20,
          name: 'Title',
          description: 'Driver title',
          type: 'dropdown',
          options: [{
            id: 7,
            value : 'Mr'
          },{
            id: 8,
            value : 'Mrs'
          }]
        },{
          id: 21,
          riskItemId: 21,
          name: 'Forename',
          description: 'Driver forename',
          type: 'text',
          options: []
        },{
          id: 22,
          riskItemId: 22,
          name: 'Surname',
          description: 'Driver surname',
          type: 'text',
          options: []
        },{
          id: 23,
          riskItemId: 23,
          name: 'Birth date',
          description: 'DD / MM / YYYY ',
          type: 'text',
          options: []
        }]
      }]
    }]
}]));

const App = ({props}) =>
  <Provider store={store}>
    <RiskCapturePage/>
  </Provider>

export default App;
