import * as React from "react";

import Issue from "./Issue";

import "./Issues.scss";

export default class Issues extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className="issues-block">
        <Issue />
        <Issue />
        <Issue />
        <Issue />
      </div>
    );
  }
}
