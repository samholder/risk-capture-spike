import { combineReducers } from 'redux';
import definition from './Definitions/DefinitionReducer';
import instances from './Instances/InstancesReducer';
import selectedPageTab from './Pages/Reducers/SelectedPageTabReducer';
import risk from './Risk/RiskReducer';

export default combineReducers({
  definition,
  instances,
  selectedPageTab,
  risk
});
