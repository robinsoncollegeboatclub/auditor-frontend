import * as React from "react";

import Crest from "../components/Crest";
import IssuesPage from "../pages/IssuesPage";

import "./App.scss";

export default class App extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className="container">
        <Crest />
        <IssuesPage />
      </div>
    );
  }
}
