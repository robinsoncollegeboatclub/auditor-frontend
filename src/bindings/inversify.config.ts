import {
  interfaces,
  Container,
  ContainerModule,
} from "inversify";

import { Store } from "redux";

import {
  FaultService,
} from "../services/index";

import {
  FaultServiceImpl,
} from "../services/impl/index";

import store from "../data/store";
import ApplicationStore from "../models/ApplicationStore";
import TYPES from "./types";

export const container = new Container();

export const faultService = new ContainerModule((bind: interfaces.Bind) => {
  bind<FaultService>(TYPES.FaultService).to(FaultServiceImpl).inSingletonScope();
});

export const storeModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<Store<ApplicationStore>>(TYPES.Store).toConstantValue(store);
});

container.load(
  faultService,
  storeModule,
);

export default container;
