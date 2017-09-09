import { takeEvery, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { INCREMENT_ASYNC, INCREMENT } from '../types';


function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: INCREMENT });
}

export default function* root() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}
