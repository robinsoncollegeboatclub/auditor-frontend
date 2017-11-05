import { countBy, values } from "lodash";
import { createSelector } from "reselect";

import ApplicationStore from "../../models/ApplicationStore";

export const faultStoreSelector = (state: ApplicationStore) => state.faults;

export const faultDocumentsSelector = createSelector(
  faultStoreSelector,
  (faults) => faults.byId,
);

export const faultArraySelector = createSelector(
  faultDocumentsSelector,
  (faults) => values(faults),
);

export const faultCountsSelector = createSelector(
  faultArraySelector,
  (faults) => countBy(faults, "status"),
);
