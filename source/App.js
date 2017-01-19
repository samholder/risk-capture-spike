import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import appReducer from 'AppReducer';
import setPolicyDefinitions from './Definitions/SetPolicyDefinitionsActionCreator';
import RiskCapture from './RiskCapture'
import { policyDefinition } from './PolicyDefinition';

const logger = createLogger();

const store = createStore(
  appReducer,
  applyMiddleware(thunk, logger)
);

store.dispatch(setPolicyDefinitions(policyDefinition));

const App = ({props}) =>
  <Provider store={store}>
    <RiskCapture/>
  </Provider>

export default App;
