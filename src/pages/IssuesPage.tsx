import autobind from "autobind-decorator";
import * as React from "react";
import { Store } from "redux";

import TYPES from "../bindings/types";
import Issues from "../components/Issues";
import IssueForm from "../components/IssueForm";
import IssuesInfo from "../components/IssuesInfo";
import { faultFetchRequested } from "../data/faults/FaultActions";
import ApplicationStore from "../models/ApplicationStore";
import { lazyInject } from "../startup/inversify";

import "./IssuesPage.scss";

export interface IssuesPageState {
  assignee: string;
  formOpen: boolean;
  issueDescription: string;
  itemDescription: string;
  itemName: string;
}

export default class IssuesPage extends React.Component<any, IssuesPageState> {
  public state: IssuesPageState = {
    assignee: "",
    formOpen: false,
    issueDescription: "",
    itemDescription: "",
    itemName: "",
  };

  @lazyInject(TYPES.Store)
  private store: Store<ApplicationStore>;

  public componentWillMount(): void {
    const action = faultFetchRequested();
    this.store.dispatch(action);
  }

  public render(): JSX.Element {
    const {
      assignee,
      formOpen,
      issueDescription,
      itemDescription,
      itemName,
    } = this.state;

    return (
      <div id="issues-page">
        <h2>All Issues</h2>

        <IssuesInfo
          formOpen={formOpen}
          onReport={this.onReport}
        />

        { !formOpen ? <Issues /> : (
          <IssueForm
            assignee={assignee}
            issueDescription={issueDescription}
            itemDescription={itemDescription}
            itemName={itemName}
            onCancel={this.onCancel}
            onChangeAssignee={this.onChangeAssignee}
            onChangeIssueDescription={this.onChangeIssueDescription}
            onChangeItemDescription={this.onChangeItemDescription}
            onChangeItemName={this.onChangeItemName}
            onSubmit={this.onSubmitIssue}
          />
        )}
      </div>
    );
  }

  @autobind
  private onReport() {
    this.setState({ formOpen: true });
  }

  @autobind
  private onCancel() {
    this.setState({ formOpen: false });
  }

  @autobind
  private onSubmitIssue() {

  }

  @autobind
  private onChangeAssignee(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ assignee: event.currentTarget.value });
  }

  @autobind
  private onChangeIssueDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ issueDescription: event.currentTarget.value });
  }

  @autobind
  private onChangeItemDescription(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ itemDescription: event.currentTarget.value });
  }

  @autobind
  private onChangeItemName(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ itemName: event.currentTarget.value });
  }
}
