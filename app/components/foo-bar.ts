import { connect } from 'ember-redux';
import { ImmutableState, AppState, AddAction } from '../types/index';

interface AddDispatch {
  (action: AddAction): void;
}

const stateToComputed = (state: ImmutableState<AppState>) => {
  return {
    number: state.number.value
  }
}

const dispatchToActions = (dispatch: AddDispatch) => ({
  add: () => dispatch({type: 'ADD'})
});

export default connect(stateToComputed, dispatchToActions)();
