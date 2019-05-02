import firstReducer from './first-reducer';
import secondReducer from './second-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  first: firstReducer,
  second: secondReducer
});

export default rootReducer;
