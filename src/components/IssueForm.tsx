import { Button, FormGroup, Intent } from "@blueprintjs/core";
import * as React from "react";

import "./IssueForm.scss";

export interface IssueFormProps {
  assignee: string;
  description: string;
  itemDescription: string;
  itemName: string;
  loading: boolean;
  onCancel: () => void;
  onChangeAssignee: React.FormEventHandler<HTMLInputElement>;
  onChangeIssueDescription: React.ChangeEventHandler<HTMLTextAreaElement>;
  onChangeItemDescription: React.FormEventHandler<HTMLInputElement>;
  onChangeItemName: React.FormEventHandler<HTMLInputElement>;
  onSubmit: () => void;
}

export default class IssueForm extends React.Component<IssueFormProps, any> {
  public render(): JSX.Element {
    const {
      assignee,
      description,
      itemDescription,
      itemName,
      loading,
      onCancel,
      onChangeAssignee,
      onChangeIssueDescription,
      onChangeItemDescription,
      onChangeItemName,
      onSubmit,
    } = this.props;

    return (
      <div className="issue-form">
        <div className="inputs">
          <div className="metadata">
            <FormGroup
              helperText="The name of the person who should be responsible for this issue..."
              label="Assignee"
              labelFor="assignee-input"
              requiredLabel={true}
            >
              <input
                className="pt-input pt-fill"
                id="assignee-input"
                onChange={onChangeAssignee}
                placeholder="John Doe"
                value={assignee}
              />
            </FormGroup>

            <FormGroup
              helperText="The item that the issue relates to..."
              label="Item Name"
              labelFor="item-name-input"
              requiredLabel={true}
            >
              <input
                className="pt-input pt-fill"
                id="item-name-input"
                onChange={onChangeItemName}
                placeholder="Silver Cox Box"
                value={itemName}
              />
            </FormGroup>

            <FormGroup
              helperText="A description of the item that the issue relates to..."
              label="Item Description"
              labelFor="item-description-input"
              requiredLabel={true}
            >
              <input
                className="pt-input pt-fill"
                id="item-description-input"
                onChange={onChangeItemDescription}
                placeholder="That old cox box with the silver shell..."
                value={itemDescription}
              />
            </FormGroup>
          </div>

          <div className="issue">
            <FormGroup
              helperText="A description of the issue itself..."
              label="Issue Description"
              labelFor="issue-input"
              requiredLabel={true}
            >
              <textarea
                className="pt-input pt-fill"
                id="issue-input"
                onChange={onChangeIssueDescription}
                placeholder="Such and such a thing is broken..."
                value={description}
              />
            </FormGroup>
          </div>
        </div>

        <div className="buttons">
          <Button onClick={onCancel}>Cancel</Button>
          <Button intent={Intent.PRIMARY} loading={loading} onClick={onSubmit}>Report An Issue</Button>
        </div>
      </div>
    );
  }
}
