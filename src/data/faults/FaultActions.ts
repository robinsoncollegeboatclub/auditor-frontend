import Action from "../../models/Action";
import Fault, { CreateFaultDTO } from "../../models/Fault";

// action types
export const FAULT_FETCH_REQUESTED = "FAULT_FETCH_REQUESTED";
export const FAULT_FETCH_SUCCEEDED = "FAULT_FETCH_SUCCEEDED";
export const FAULT_FETCH_FAILED = "FAULT_FETCH_FAILED";
export const CREATE_FAULT_REQUESTED = "CREATE_FAULT_REQUESTED";
export const CREATE_FAULT_SUCCEEDED = "CREATE_FAULT_SUCCEEDED";
export const CREATE_FAULT_FAILED = "CREATE_FAULT_FAILED";

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

export function createFaultRequested(createFaultDto: CreateFaultDTO): Action {
  return { type: CREATE_FAULT_REQUESTED, createFaultDto };
}

export function createFaultSucceeded(fault: Fault): Action {
  return { type: CREATE_FAULT_SUCCEEDED, fault };
}

export function createFaultFailed(error: Error): Action {
  return { type: CREATE_FAULT_FAILED, error };
}
