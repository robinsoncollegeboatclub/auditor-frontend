import ApplicationStore from "../models/ApplicationStore";

export const defaultStore: ApplicationStore = {
  faults: {
    errors: [],
    allIds: [],
    byId: {},
  },
};

export default defaultStore;
