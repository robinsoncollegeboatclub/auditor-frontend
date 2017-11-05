import * as React from "react";
import * as ReactDOM from "react-dom";

// import startup scripts
import "./startup";

import App from "./containers/App";

import "./index.scss";

ReactDOM.render(
  <App />,
  document.getElementById("example")
);
