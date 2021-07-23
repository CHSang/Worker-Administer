import { all, fork } from "redux-saga/effects";
import CandidateAdministerSaga from "../CandidateAdminister/Redux/saga";
import WorkerAdministerSaga from "../WorkerAdminister/Redux/saga";

export function* rootSaga () {
    yield all([
        fork(WorkerAdministerSaga),
        fork(CandidateAdministerSaga),
    ]);
}