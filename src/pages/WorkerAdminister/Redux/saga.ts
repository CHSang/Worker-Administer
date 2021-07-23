import { GET_WORKER_ADMINISTER_DATA } from './Constans';
import { put, takeLatest } from 'redux-saga/effects';
import { setWorkerAdministerData } from './Action';
import { DATA } from './Data';

function* getWorkerAdministerData() {
  yield put(setWorkerAdministerData(DATA));
}

export default function* WorkerAdministerSaga() {
  yield takeLatest(GET_WORKER_ADMINISTER_DATA, getWorkerAdministerData);
}
