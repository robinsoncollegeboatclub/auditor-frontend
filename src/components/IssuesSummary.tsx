import { isNumber, Dictionary } from "lodash";
import * as React from "react";
import { connect } from "react-redux";

import { faultCountsSelector } from "../data/selectors";
import ApplicationStore from "../models/ApplicationStore";

import "./IssuesSummary.scss";

export interface IssuesSummaryProps {
  counts?: Dictionary<number>;
}

const mapStateToProps = (state: ApplicationStore) => {
  return {
    counts: faultCountsSelector(state),
  };
};

@(connect(mapStateToProps) as any)
export default class IssuesSummary extends React.Component<IssuesSummaryProps, any> {
  public render(): JSX.Element {
    const {
      counts,
    } = this.props;

    return (
      <ul className="issues-summary">
        <li>
          <span className="count">{ counts && isNumber(counts.todo) ? counts.todo : 0 }</span>
          <span className="status">Todo</span>
        </li>

        <li>
          <span className="count">{ counts && isNumber(counts["in-progress"]) ? counts["in-progress"] : 0 }</span>
          <span className="status">In Progress</span>
        </li>

        <li>
          <span className="count">{ counts && isNumber(counts.completed) ? counts.completed : 0 }</span>
          <span className="status">Completed</span>
        </li>
      </ul>
    );
  }
}
