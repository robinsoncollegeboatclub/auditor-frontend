import * as React from "react";

import "./ProgressBar.scss";

export default class ProgressBar extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className="progress-bar complete">
        <div className="blocks">
          <div className="block one" />
          <div className="block two" />
          <div className="block three" />
        </div>

        <span className="status">Complete</span>
      </div>
    );
  }
}
