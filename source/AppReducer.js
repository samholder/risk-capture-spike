import { combineReducers } from 'redux';
import definition from './Definitions/DefinitionReducer';
import instances from './Instances/InstancesReducer';
import selectedPage from './Pages/Reducers/SelectedPageReducer';
import risk from './Risk/RiskReducer';

export default combineReducers({
  definition,
  instances,
  selectedPage,
  risk
});
