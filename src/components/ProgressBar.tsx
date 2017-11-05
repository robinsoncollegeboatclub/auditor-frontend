import classNames from "classnames";
import { startCase } from "lodash";
import * as React from "react";

import "./ProgressBar.scss";

export interface ProgressBarProps {
  status: string;
}

export default class ProgressBar extends React.Component<ProgressBarProps, any> {
  public render(): JSX.Element {
    const {
      status,
    } = this.props;

    const progressBarClass = classNames("progress-bar", status);

    return (
      <div className={progressBarClass}>
        <div className="blocks">
          <div className="block one" />
          <div className="block two" />
          <div className="block three" />
        </div>

        <span className="status">{startCase(status)}</span>
      </div>
    );
  }
}
