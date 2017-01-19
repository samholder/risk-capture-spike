import { combineReducers } from 'redux';
import definitions from './Definitions/DefinitionsReducer';
import selectedPageTab from './Pages/Reducers/SelectedPageTabReducer';
export default combineReducers({
  definitions,
  selectedPageTab
});
