import { Button, Intent } from "@blueprintjs/core";
import * as classNames from "classnames";
import * as React from "react";

import IssuesSummary from "./IssuesSummary";

import "./IssuesInfo.scss";

export interface IssuesInfoProps {
  formOpen: boolean;
  onReport: () => void;
}

export default class IssuesInfo extends React.Component<IssuesInfoProps, any> {
  public render(): JSX.Element {
    const {
      formOpen,
      onReport,
    } = this.props;

    const issuesInfoClass = classNames("issues-info", {
      "form-open": formOpen,
    });

    return (
      <div className={issuesInfoClass}>
        <IssuesSummary />

        { !formOpen ? (
          <Button
            intent={Intent.PRIMARY}
            onClick={onReport}
          >
            Report An Issue
          </Button>
        ) : null }
      </div>
    );
  }
}
