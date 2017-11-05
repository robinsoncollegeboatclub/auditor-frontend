import { call, put, takeLatest } from "redux-saga/effects";

import TYPES from "../../bindings/types";
import container from "../../bindings/inversify.config";
import Fault from "../../models/Fault";
import FaultService from "../../services/FaultService";
import { FAULT_FETCH_FAILED, FAULT_FETCH_REQUESTED, FAULT_FETCH_SUCCEEDED } from "./FaultActions";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchFaults() {
  const faultService: FaultService = container.get<FaultService>(TYPES.FaultService);

  try {
    const faults: Fault[] = yield call(() => faultService.getFaults());
    yield put({type: FAULT_FETCH_SUCCEEDED, faults });
  } catch (e) {
    yield put({type: FAULT_FETCH_FAILED, e });
  }
}

/*
  Does not allow concurrent fetches of faults. If "FAULT_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export function* fetchFaultSaga() {
  yield takeLatest(FAULT_FETCH_REQUESTED, fetchFaults);
}

export default [
  fetchFaultSaga,
];
