import { fork } from 'redux-saga/effects';
import counter from '../domain/counter/sagas';

export default function* root() {
  yield fork(counter);
}
