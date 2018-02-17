import { ImmutableObject } from 'seamless-immutable';

export interface NumberState {
  value: number;
}

export interface AppState {
  number: NumberState;
}

export interface AddAction {
  type: 'ADD';
}

export type ImmutableState<T> = ImmutableObject<T> & T;
