import { combineReducers } from 'redux';
import definition from './Definitions/DefinitionReducer';
import instancing from './Instances/InstancingReducer';
import selectedPage from './Pages/Reducers/SelectedPageReducer';
import risk from './Risk/RiskReducer';

export default combineReducers({
  definition,
  instancing,
  selectedPage,
  risk
});
