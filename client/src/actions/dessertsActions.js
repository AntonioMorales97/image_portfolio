import axios from 'axios';
import { DESSERTS_LOADING, DESSERTS_LOADED, DESSERTS_FAILED } from './types';

export const loadDesserts = () => dispatch => {
  dispatch({
    type: DESSERTS_LOADING
  });
  axios
    .get('api/desserts')
    .then(res =>
      dispatch({ type: DESSERTS_LOADED, payload: res.data.desserts })
    )
    .catch(err => {
      console.log(err);
      dispatch({ type: DESSERTS_FAILED });
    });
};
