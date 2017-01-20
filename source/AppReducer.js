import { combineReducers } from 'redux';
import definitions from './Definitions/DefinitionsReducer';
import selectedPageTab from './Pages/Reducers/SelectedPageTabReducer';
import risk from './Risk/RiskReducer';
export default combineReducers({
  definitions,
  selectedPageTab,
  risk
});
