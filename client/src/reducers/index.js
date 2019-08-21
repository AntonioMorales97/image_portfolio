import { combineReducers } from 'redux';
import dessertsReducer from './dessertsReducer';

export default combineReducers({
  dessert: dessertsReducer
});
