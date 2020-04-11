import { takeLatest, put, call, delay } from 'redux-saga/effects';

import actions from './action-types';
import { receiveCatFailure, receiveCatSuccess } from './actions';
import { fetchCats } from './services';

function* onFetchCat() {
  try {
    const response = yield call(
      fetchCats,
      'https://api.thecatapi.com/v1/images/search',
    );

    yield put(receiveCatSuccess(response.data[0]));
  } catch (e) {
    yield put(receiveCatFailure(e));
  }
}

export function* onFetchCatError() {
  try {
    // API Request
    yield delay(1000);

    const response = yield call(
      fetchCats,
      'https://api.thecatapi.com/v1/images',
    );

    yield put(receiveCatSuccess(response.data[0]));
  } catch (e) {
    yield put(receiveCatFailure('There was a problem fetching a cat.'));
  }
}

export function* fetchCatSaga() {
  yield takeLatest(actions.FETCH_CAT, onFetchCat);
}

export function* fetchCatErrorSaga() {
  yield takeLatest(actions.FETCH_CAT_ERROR, onFetchCatError);
}
