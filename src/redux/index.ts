import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import catReducer from '../modules/cat/reducer';
import { fetchCatSaga, fetchCatErrorSaga } from '../modules/cat/saga';

function* saga() {
  yield all([fetchCatSaga(), fetchCatErrorSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  cat: catReducer,
});

const composeMiddleware = compose(applyMiddleware(sagaMiddleware));

export default createStore(reducer, composeMiddleware);

sagaMiddleware.run(saga);
