import {
  DESSERTS_LOADING,
  DESSERTS_LOADED,
  DESSERTS_FAILED
} from '../actions/types';

const initialState = {
  desserts: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DESSERTS_LOADING:
      return {
        ...state,
        loading: true
      };
    case DESSERTS_LOADED:
      return {
        ...state,
        desserts: [...action.payload],
        loading: false
      };
    case DESSERTS_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
