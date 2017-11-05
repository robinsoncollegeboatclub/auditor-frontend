import { call, put, takeLatest } from "redux-saga/effects";

import TYPES from "../../bindings/types";
import container from "../../bindings/inversify.config";
import { CreateFaultAction } from "../../models/Action";
import Fault from "../../models/Fault";
import FaultService from "../../services/FaultService";

import {
  CREATE_FAULT_REQUESTED,
  createFaultFailed,
  createFaultSucceeded,
  FAULT_FETCH_REQUESTED,
  faultFetchFailed,
  faultFetchSucceeded,
} from "./FaultActions";

// worker Saga: fetch all faults on FAULT_FETCH_REQUESTED actions
function* fetchFaults() {
  const faultService: FaultService = container.get<FaultService>(TYPES.FaultService);

  try {
    const faults: Fault[] = yield call(() => faultService.getFaults());
    yield put(faultFetchSucceeded(faults));
  } catch (e) {
    yield put(faultFetchFailed(e));
  }
}

// worker Saga: create a fault in the database
function* createFault(action: CreateFaultAction) {
  const faultService : FaultService = container.get<FaultService>(TYPES.FaultService);

  try {
    const fault: Fault = yield call(() => faultService.createFault(action.createFaultDto));
    yield put(createFaultSucceeded(fault));
  } catch (e) {
    yield put(createFaultFailed(e))
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

export function* createFaultSaga() {
  yield takeLatest(CREATE_FAULT_REQUESTED, createFault);
}

export default [
  fetchFaultSaga,
  createFaultSaga,
];
