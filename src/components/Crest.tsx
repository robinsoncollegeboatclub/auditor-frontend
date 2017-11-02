import * as React from "react";

import "./Crest.scss";

export default class Crest extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className="crest">
        <img
          src="assets/crest.png"
          alt="RCBC Crest"
          className="rcbc-crest"
        />
      </div>
    );
  }
}
