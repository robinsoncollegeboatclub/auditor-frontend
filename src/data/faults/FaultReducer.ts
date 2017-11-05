import { Reducer } from "redux";

import Action from "../../models/Action";
import { ResourceStore, ResourceById } from "../../models/ApplicationStore";
import Fault from "../../models/Fault";
import defaultStore from "../defaultStore";

// import the actions
import {
  CREATE_FAULT_FAILED, CREATE_FAULT_SUCCEEDED,
  FAULT_FETCH_FAILED,
  FAULT_FETCH_SUCCEEDED,
} from "./FaultActions";

// create a reducer to handle authentication actions and update the store
export const reducer: Reducer<ResourceStore<Fault>> =
  (faultStore: ResourceStore<Fault> = defaultStore.faults, action: Action) => {
    switch (action.type) {
      case FAULT_FETCH_FAILED:
        return {
          ...faultStore,
          errors: [...faultStore.errors, action.error],
        };

      case FAULT_FETCH_SUCCEEDED:
        const { faults } = action;

        const byId: ResourceById<Fault> = { ...faultStore.byId };

        const receivedIds = faults.map((fault: Fault) => {
          byId[fault.id] = fault;
          return fault.id;
        });

        const idSet = new Set([...faultStore.allIds, ...receivedIds]);

        return {
          ...faultStore,
          allIds: Array.from(idSet),
          byId,
        };

      case CREATE_FAULT_FAILED:
        return {
          ...faultStore,
          errors: [...faultStore.errors, action.error],
        };

      case CREATE_FAULT_SUCCEEDED:
        const fault: Fault = action.fault;

        return {
          ...faultStore,
          allIds: [...faultStore.allIds, fault.id],
          byId: { ...faultStore.byId, [fault.id]: fault },
        };

      default:
        return faultStore;
    }
  };

export default reducer;
