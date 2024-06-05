import { ADD_NAME } from './action';

export default function namesReducer(state = [], action) {
  switch (action.type) {
    case ADD_NAME:
      return [...state, action.name];
    default:
      return state;
  }
}
