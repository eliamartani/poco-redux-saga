import actionTypes from './action-types';

export const fetchCat = () => ({
  type: actionTypes.FETCH_CAT,
});

export const fetchCatError = () => ({
  type: actionTypes.FETCH_CAT_ERROR,
});

export const receiveCatSuccess = (data: any) => ({
  type: actionTypes.RECEIVE_CAT_SUCCESS,
  data,
});

export const receiveCatFailure = (data: any) => ({
  type: actionTypes.RECEIVE_CAT_FAILURE,
  data,
});
