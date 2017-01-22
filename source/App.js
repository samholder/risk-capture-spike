import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import appReducer from 'AppReducer';
import setDefinition from './Definitions/SetDefinitionActionCreator';
import RiskCaptureContainer from './RiskCaptureContainer';
import { policyDefinition } from './PolicyDefinition';

const logger = createLogger();

const store = createStore(
  appReducer,
  applyMiddleware(thunk, logger)
);

store.dispatch(setDefinition(policyDefinition));

const App = () =>
  <Provider store={store}>
    <RiskCaptureContainer/>
  </Provider>;

export default App;
