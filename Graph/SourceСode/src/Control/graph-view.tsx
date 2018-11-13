import * as React from "react";
import { GraphModel } from "../graph-model";

interface Props {
  model: GraphModel;
}

/**
 * Размер прямоугольника
 */
const setting = {
  RectW: 50,
  RectH: 30
};

export class GraphView extends React.Component<Props, {}> {
  private myRef = React.createRef<HTMLCanvasElement>();

  componentDidMount() {
    this.renderNodesandLinks();
  }

  CanvasDown = (e: React.MouseEvent): void => {
    const myCanvas = this.myRef.current as HTMLCanvasElement;
    const rect: any = myCanvas.getBoundingClientRect();
    const mousePos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };

    const element = this.props.model.checkClick(mousePos);

    if (element) {
      this.props.model.setSelectedElement(element);
    }
  };

  CanvasUp = (): void => {
    if (this.props.model.getSelectedElement()) {
      this.props.model.deleteSelectedElement();
    }
  };

  CanvasMove = (e: React.MouseEvent): void => {
    const myCanvas = this.myRef.current as HTMLCanvasElement;
    const rect: any = myCanvas.getBoundingClientRect();
    const mousePos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    const SelectedNode = this.props.model.getSelectedElement();
    const allNodes = this.props.model.getNodes();
    if (SelectedNode) {
      const SelectedNodeIndex = allNodes.findIndex(
        node => node.label === SelectedNode.label
      );
      const newNode = {
        ...SelectedNode,
        pos: [mousePos.x, mousePos.y]
      };
      this.props.model.changeNode(SelectedNodeIndex, newNode);
      this.renderNodesandLinks();
    }
  };

  renderNodesandLinks = () => {
    const myCanvas: HTMLCanvasElement = this.myRef.current as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = myCanvas.getContext(
      "2d"
    ) as CanvasRenderingContext2D;

    myCanvas.width = myCanvas.offsetWidth;
    myCanvas.height = myCanvas.offsetHeight;

    const allNodes = this.props.model.getNodes();
    const allLinks = this.props.model.getLinks();
    // отрисовываем узлы графа
    allNodes.forEach(node => {
      ctx.fillStyle = node.color;
      ctx.fillRect(
        node.pos[0] - setting.RectW / 2,
        node.pos[1] - setting.RectH / 2,
        setting.RectW,
        setting.RectH
      );
      ctx.fillStyle = "black";
      ctx.font = "12px Georgia";
      ctx.fillText(
        node.label,
        node.pos[0] - setting.RectW / 2,
        node.pos[1] + setting.RectH / 2
      );
    });
    // отрисовываем связи
    allLinks.forEach(link => {
      ctx.beginPath();
      ctx.strokeStyle = "red";
      ctx.moveTo(allNodes[link.from].pos[0], allNodes[link.from].pos[1]);
      ctx.lineTo(allNodes[link.to].pos[0], allNodes[link.to].pos[1]);
      ctx.stroke();
    });
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
