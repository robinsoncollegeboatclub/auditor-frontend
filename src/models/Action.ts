import { Action as A } from "redux";

export interface Action extends A {
  [id: string]: any;
}

export default Action;
