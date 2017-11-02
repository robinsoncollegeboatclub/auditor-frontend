import * as React from "react";

import "./IssuesSummary.scss";

export default class IssuesSummary extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <ul className="issues-summary">
        <li>
          <span className="count">4</span>
          <span className="status">Critical</span>
        </li>

        <li>
          <span className="count">4</span>
          <span className="status">In Progress</span>
        </li>

        <li>
          <span className="count">4</span>
          <span className="status">Completed</span>
        </li>
      </ul>
    );
  }
}
