import * as React from "react";

import ProgressBar from "./ProgressBar";

import "./Issue.scss";

export default class Issue extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className="issue">
        <div className="issue-inner">
          <div className="info">
            <span className="description">Cox box not working</span>
            <span className="issue-number">#1</span>
            <ProgressBar />
          </div>

          <div className="details">
            <div className="detail">
              <p className="key">Assignee</p>
              <p className="value">Joshua Efiong</p>
            </div>

            <div className="detail">
              <p className="key">Item</p>
              <p className="value">Silver Cox Box</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
