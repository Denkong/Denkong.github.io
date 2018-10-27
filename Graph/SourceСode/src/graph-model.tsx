export interface Node {
  label: string;
  pos: number[];
  color: string;
}
export interface Link {
  from: number;
  to: number;
}
/**
 * Размер прямоугольника
 */
const setting = {
  RectW: 50,
  RectH: 30
};

export class GraphModel {
  private AllNodes: Node[];
  private AllLink: Link[];
  /**
   * Проверка нажития на узел графа
   * Если прошла проверка на позицию щелчка и элемента,
   * то устанавливает selectElement
   *
   * @param {mousePos} { x: number; y: number }
   * @return {boolean|Node}
   */
  checkClick(mousePos: { x: number; y: number }): boolean | Node {
    let returnValue: boolean | Node = false;
    this.getNodes().forEach(node => {
      if (
        mousePos.x > node.pos[0] - setting.RectW / 2 &&
        mousePos.x < node.pos[0] + setting.RectW / 2 &&
        mousePos.y > node.pos[1] - setting.RectH / 2 &&
        mousePos.y < node.pos[1] + setting.RectH / 2
      ) {
        returnValue = node;
      }
    });

    return returnValue;
  }

  // должен вернуть массив всех связей узлов
  getLinks(): Link[] {
    return this.AllLink;
  }
  // должен возвращать массив всех узлов
  getNodes(): Node[] {
    return this.AllNodes;
  }
  // при вызове контрол GraphView должен начать отображать переданные узлы и связи
  setNodesAndLinks(nodes: Node[], links: Link[], myCanvas: HTMLCanvasElement) {
    this.AllNodes = nodes;
    this.AllLink = links;

    const ctx = myCanvas.getContext("2d") as CanvasRenderingContext2D;

    myCanvas.width = myCanvas.offsetWidth;
    myCanvas.height = myCanvas.offsetHeight;

    // отрисовываем узлы графа
    nodes.forEach(node => {
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
    let posLink: any = [];
    links.forEach(link => {
      nodes.forEach((node, index) => {
        if (link.from === index || link.to === index) {
          posLink = [...posLink, { x: node.pos[0], y: node.pos[1] }];
        }

        if (posLink.length === 2) {
          ctx.beginPath();
          ctx.strokeStyle = "red";
          ctx.moveTo(posLink[0].x, posLink[0].y);
          ctx.lineTo(posLink[1].x, posLink[1].y);
          ctx.stroke();
        }
      });
      posLink = [];
    });
  }
}
