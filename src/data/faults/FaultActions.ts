import Action from "../../models/Action";
import Fault from "../../models/Fault";

// action types
export const FAULT_FETCH_REQUESTED = "FAULT_FETCH_REQUESTED";
export const FAULT_FETCH_SUCCEEDED = "FAULT_FETCH_SUCCEEDED";
export const FAULT_FETCH_FAILED = "FAULT_FETCH_FAILED";

// action creators
export function faultFetchRequested(): Action {
  return { type: FAULT_FETCH_REQUESTED };
}

export function faultFetchSucceeded(faults: Fault[]) {
  return { type: FAULT_FETCH_SUCCEEDED, faults };
}

export function faultFetchFailed(error: Error) {
  return { type: FAULT_FETCH_FAILED, error };
}
