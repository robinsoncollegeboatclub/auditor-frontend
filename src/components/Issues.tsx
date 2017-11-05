import * as React from "react";
import { connect } from "react-redux";

import { faultArraySelector } from "../data/selectors";
import ApplicationStore from "../models/ApplicationStore";
import Fault from "../models/Fault";
import Issue from "./Issue";

import "./Issues.scss";

export interface FaultsProps {
  faults?: Fault[];
}

const mapStateToProps = (state: ApplicationStore) => {
  return {
    faults: faultArraySelector(state),
  };
};

@(connect(mapStateToProps) as any)
export default class Issues extends React.Component<FaultsProps, any> {
  public render(): JSX.Element {
    const {
      faults,
    } = this.props;

    return (
      <div className="issues-block">
        { faults ? faults.map((fault) => <Issue key={fault.id} fault={fault} />) : null }
      </div>
    );
  }
}
