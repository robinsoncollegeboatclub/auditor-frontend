import * as React from "react";

import Fault from "../models/Fault";
import ProgressBar from "./ProgressBar";

import "./Issue.scss";

export interface FaultProps {
  fault: Fault;
}

export default class Issue extends React.Component<FaultProps, any> {
  public render(): JSX.Element {
    const {
      fault,
    } = this.props;

    return (
      <div className="issue">
        <div className="issue-inner">
          <div className="info">
            <span className="description">{fault.description}</span>
            <span className="issue-number">#{fault.id}</span>
            <ProgressBar status={fault.status} />
          </div>

          <div className="details">
            <div className="detail">
              <p className="key">Assignee</p>
              <p className="value">{fault.assignee}</p>
            </div>

            <div className="detail">
              <p className="key">Item</p>
              <p className="value">{fault.itemName}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
