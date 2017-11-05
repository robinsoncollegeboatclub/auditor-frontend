import Fault from "./Fault";

export interface Store {
  errors: Error[];
}

export interface ResourceById<T> {
  [id: number]: T;
}

export interface ResourceStore<T> extends Store {
  allIds: number[];
  byId: ResourceById<T>;
}

export interface ApplicationStore {
  faults: ResourceStore<Fault>;
}

export default ApplicationStore;
