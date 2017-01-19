import { combineReducers } from 'redux';
import definitions from './Definitions/DefinitionsReducer';
import selectedGroupTab from './Groups/Reducers/SelectedGroupTabReducer';
export default combineReducers({
  definitions,
  selectedGroupTab
});
