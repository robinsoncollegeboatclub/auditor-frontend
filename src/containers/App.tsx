import * as React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";

import TYPES from "../bindings/types";
import Crest from "../components/Crest";
import { lazyInject } from "../startup/inversify";
import ApplicationStore from "../models/ApplicationStore";
import IssuesPage from "../pages/IssuesPage";

import "./App.scss";

export default class App extends React.Component<any, any> {
  @lazyInject(TYPES.Store)
  private store: Store<ApplicationStore>;

  public render(): JSX.Element {
    return (
      <Provider store={this.store}>
        <div className="container">
          <Crest />
          <IssuesPage />
        </div>
      </Provider>
    );
  }
}
