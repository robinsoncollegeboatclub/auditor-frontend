import {
  applyMiddleware,
  compose,
  createStore,
} from "redux";

import createSagaMiddleware from "redux-saga";

import defaultStore from "./defaultStore";
import reducers from "./reducers";
import sagas from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// integrate support for the redux dev tools
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// mount it on the Store
export const store = createStore(
  reducers,
  defaultStore,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  ),
);

// then run the saga
sagas.map((saga: () => Iterator<any>) => sagaMiddleware.run(saga));

// make the store the default export
export default store;
