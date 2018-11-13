import * as React from "react";
import { GraphView } from "./Control/graph-view";
import { GraphModel, Node, Link } from "./graph-model";

import "./App.css";

/**
 * Начальное значение Вершин
 */
const Nodes: Node[] = [
  {
    label: "node0",
    pos: [156, 51],
    color: "#99ffff"
  },
  {
    label: "node1",
    pos: [34, 188],
    color: "#99FF00"
  },
  {
    label: "node2",
    pos: [295, 291],
    color: "#ff9600"
  },
  {
    label: "node3",
    pos: [273, 125],
    color: "#99ff99"
  },
  {
    label: "node4",
    pos: [416, 283],
    color: "#99ff99"
  },
  {
    label: "node5",
    pos: [168, 288],
    color: "#99ff99"
  }
];
/**
 * Начальные значение Связей между узлами
 */
const Links: Link[] = [
  {
    from: 1,
    to: 0
  },
  {
    from: 3,
    to: 2
  },
  {
    from: 3,
    to: 5
  },
  {
    from: 3,
    to: 4
  }
];

const model = new GraphModel();
model.setNodesAndLinks(Nodes, Links);

class App extends React.Component {
  public render() {
    return (
      <>
        <p>GraphView1</p>
        <GraphView model={model} />
      </>
    );
  }
}
export default App;
