import { combineReducers } from 'redux';
import Immutable from 'seamless-immutable';
import { NumberState, AddAction, ImmutableState } from '../types/index';

const initialState = Immutable({
  value: 0
});

const number = ((state: ImmutableState<NumberState>, action: AddAction): ImmutableState<NumberState> => {
  if(action.type === 'ADD') {
    return state.merge({value: state.value + 2});
  }
  return state || initialState;
});

export default combineReducers({
  number
});
