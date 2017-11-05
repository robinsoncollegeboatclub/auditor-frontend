import { Action as A } from "redux";

import { CreateFaultDTO } from "./Fault";

export interface Action extends A {
  [id: string]: any;
}

export interface CreateFaultAction extends A {
  createFaultDto: CreateFaultDTO;
}

export default Action;
