import autobind from "autobind-decorator";
import * as React from "react";
import { Store } from "redux";

import TYPES from "../bindings/types";
import Issues from "../components/Issues";
import IssueForm from "../components/IssueForm";
import IssuesInfo from "../components/IssuesInfo";
import { createFaultRequested, faultFetchRequested } from "../data/faults/FaultActions";
import ApplicationStore from "../models/ApplicationStore";
import { lazyInject } from "../startup/inversify";

import "./IssuesPage.scss";
import { CreateFaultDTO } from "../models/Fault";

export interface IssuesPageState {
  assignee: string;
  formOpen: boolean;
  description: string;
  itemDescription: string;
  itemName: string;
  loading: boolean;
}

export default class IssuesPage extends React.Component<any, IssuesPageState> {
  public state: IssuesPageState = {
    assignee: "",
    formOpen: false,
    description: "",
    itemDescription: "",
    itemName: "",
    loading: false,
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
      description,
      formOpen,
      itemDescription,
      itemName,
      loading,
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
            description={description}
            itemDescription={itemDescription}
            itemName={itemName}
            loading={loading}
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
    const {
      assignee,
      description,
      itemDescription,
      itemName,
    } = this.state;

    const createFaultDto: CreateFaultDTO = {
      assignee,
      description,
      itemDescription,
      itemName,
      status: "open",
    };

    const action = createFaultRequested(createFaultDto);
    this.store.dispatch(action);

    this.setState({ formOpen: false });
  }

  @autobind
  private onChangeAssignee(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ assignee: event.currentTarget.value });
  }

  @autobind
  private onChangeIssueDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ description: event.currentTarget.value });
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
