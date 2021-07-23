import { GET_CANDIDATE_ADMINISTER_DATA } from './Constans';
import { put, takeLatest } from 'redux-saga/effects';
import { setCandidateAdministerData } from './Action';
import { DATA } from './Data';

function* getCandidateAdministerData() {
  yield put(setCandidateAdministerData(DATA));
}

export default function* CANDIDATEAdministerSaga() {
  yield takeLatest(GET_CANDIDATE_ADMINISTER_DATA, getCandidateAdministerData);
}
