import { TYPES } from '../actions/items';

export function loading(state = false, action) {
  switch (action.type) {
    case TYPES.LOADING:
      return action.loading;

    default:
      return state;
  }
}