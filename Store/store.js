import { createStore, combineReducers} from 'redux';
import reducer from './reducer';
 
const rootReducer = combineReducers({
  count: CountReducer,
});
 
export const store = createStore(rootReducer);