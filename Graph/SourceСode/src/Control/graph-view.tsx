import * as React from "react";
import { GraphModel, Node, Link } from "../graph-model";

interface Props {
  model: GraphModel;
}
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

export class GraphView extends React.Component<Props, {}> {
  private myRef = React.createRef<HTMLCanvasElement>();
  private selectElement: { label: string; x: number; y: number };

  componentDidMount() {
    // Устанавливаем начальные значение
    this.props.model.setNodesAndLinks(Nodes, Links, this.myRef
      .current as HTMLCanvasElement);
  }

  /**
   * Кнопка мыши нажата над элементом.
   * Если прошла проверка на позицию щелчка и элемента,
   * то устанавливает selectElement
   *
   * @param {e} React.MouseEvent
   * @return {void}
   */
  CanvasDown = (e: React.MouseEvent): void => {
    const myCanvas = this.myRef.current as HTMLCanvasElement;
    const rect: any = myCanvas.getBoundingClientRect();
    const mousePos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    const element = this.props.model.checkClick(mousePos) as Node;
    if (element) {
      this.selectElement = {
        label: element.label,
        x: element.pos[0],
        y: element.pos[1]
      };
    }
  };

  /**
   * Кнопка мыши отпущена над элементом.
   * Если в перемнной selectElement есть элемент,
   * то переменная очищается
   *
   * @return {void}
   */
  CanvasUp = (): void => {
    if (this.selectElement) {
      delete this.selectElement;
    }
  };
  /**
   * Каждое движение мыши над элементом генерирует это событие.
   * Если в перемнной selectElement есть элемент,
   * то контрол начинает отображать переданные новые узлы и связи
   *
   * @param {e} React.MouseEvent
   * @return {void}
   */
  CanvasMove = (e: React.MouseEvent): void => {
    const myCanvas = this.myRef.current as HTMLCanvasElement;
    const rect: any = myCanvas.getBoundingClientRect();
    const mousePos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };

    if (this.selectElement) {
      const NewNodes = this.props.model.getNodes().map(node => {
        if (node.label === this.selectElement.label) {
          return { ...node, pos: [mousePos.x, mousePos.y] };
        }
        return node;
      });
      this.props.model.setNodesAndLinks(
        NewNodes,
        this.props.model.getLinks(),
        this.myRef.current as HTMLCanvasElement
      );
    }
  };

  showAllLink = (): void => {
    console.log(this.props.model.getLinks());
  };
  showAllNodes = (): void => {
    console.log(this.props.model.getNodes());
  };

  render() {
    return (
      <>
        <canvas
          id="canvas"
          ref={this.myRef}
          onMouseDown={this.CanvasDown}
          onMouseUp={this.CanvasUp}
          onMouseMove={this.CanvasMove}
          onMouseOut={this.CanvasUp}
        />
        <button onClick={this.showAllLink}>AllLink</button>
        <button onClick={this.showAllNodes}>AllNodes</button>
      </>
    );
  }
}
