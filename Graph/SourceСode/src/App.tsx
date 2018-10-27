import * as React from "react";
import { GraphView } from "./Control/graph-view";
import { GraphModel } from "./graph-model";

import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <>
        <p>GraphView1</p>
        <GraphView model={new GraphModel()} />
        <p>GraphView2</p>
        <GraphView model={new GraphModel()} />
        <p>GraphView3</p>
        <GraphView model={new GraphModel()} />
      </>
    );
  }
}
export default App;
