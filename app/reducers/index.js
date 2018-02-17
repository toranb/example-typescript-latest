import { combineReducers } from 'redux';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  value: 0
});

const number = ((state, action) => {
  if(action.type === 'ADD') {
    return state.merge({value: state.value + 1});
  }
  return state || initialState;
});

export default combineReducers({
  number
});
